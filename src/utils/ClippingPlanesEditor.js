function ClippingPlanesEditor(options) {
    let scene = options.scene
      , clippingPlanes = options.clippingPlanes
      , primitives = scene.primitives.add(new PrimitiveCollection)
      , _this = this;
    this._removeAddEventListener = clippingPlanes.planeAdded.addEventListener(function() {
        _this._readyPromise.then(function() {
            _this._addPlane()
        })
    }, this),
    this._removeRemoveEventListener = clippingPlanes.planeRemoved.addEventListener(ClippingPlanesEditor.prototype._removePlane, this),
    this._planeSizeInMeters = options.planeSizeInMeters,
    this._scene = scene,
    this._sseh = new ScreenSpaceEventHandler(scene.canvas),
    this._clippingPlanes = clippingPlanes,
    this._primitives = primitives,
    this._origin = options.origin,
    this._movePlanesToOrigin = defaultValue(options.movePlanesToOrigin, true),
    this._primitiveOptions = defaultValue(options.primitiveOptions, y.EMPTY_OBJECT),
    this._active = false,
    this._pickedPlane = void 0,
    this._hoverPlane = void 0,
    this._draggingPlane = new Plane(f.UNIT_X,0),
    this._pixelSize = options.pixelSize,
    this._maximumSizeInMeters = options.maximumSizeInMeters,
    this._target = void 0,
    this._transform = Matrix4.clone(Matrix4.IDENTITY),
    this._readyPromise = new Promise(function(r, s) {
        _this._createPlanes(r, s)
    }
    )
}
Object.defineProperties(ClippingPlanesEditor.prototype, {
    active: {
        get: function() {
            return this._active
        }
    },
    scene: {
        get: function() {
            return this._scene
        }
    },
    clippingPlanes: {
        get: function() {
            return this._clippingPlanes
        }
    },
    readyPromise: {
        get: function() {
            return this._readyPromise
        }
    }
});
ClippingPlanesEditor.prototype.activate = function() {
    this._active = true;
    let primitives = this._primitives;
    for (let n = 0; n < primitives.length; n++)
        primitives.get(n).show = true;
    let sseh = this._sseh;
    sseh.setInputAction(this._handleLeftDown.bind(this), ScreenSpaceEventType.LEFT_DOWN),
    sseh.setInputAction(this._handleLeftUp.bind(this), ScreenSpaceEventType.LEFT_UP),
    sseh.setInputAction(this._handleMouseMove.bind(this), ScreenSpaceEventType.MOUSE_MOVE)
}
;
ClippingPlanesEditor.prototype.deactivate = function() {
    let primitives = this._primitives;
    for (let n = 0; n < primitives.length; n++)
        primitives.get(n).show = false;
    let sseh = this._sseh;
    sseh.removeInputAction(ScreenSpaceEventType.LEFT_DOWN),
    sseh.removeInputAction(ScreenSpaceEventType.LEFT_UP),
    sseh.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE),
    this._active = false
}
;
ClippingPlanesEditor.prototype._createPlanes = function(e, t) {
    let clippingPlanes = this._clippingPlanes
      , owner = clippingPlanes.owner
      , _this = this;
    if (typeof owner > "u") {
        let a = this._scene.preRender.addEventListener(function() {
            a(),
            _this.isDestroyed() || _this._createPlanes(e, t)
        });
        return
    }
    this._target = owner;
    let origin = this._origin, s;
    owner instanceof Cesium3DTileset ? s = owner.readyPromise.then(function() {
        _this._transform = owner.clippingPlanesOriginMatrix,
        u(origin) || (_this._origin = f.clone(owner.boundingSphere.center))
    }) : owner instanceof Model ? s = owner.readyPromise.then(function() {
        _this._transform = owner.modelMatrix,
        u(origin) || (_this._origin = Matrix4.multiplyByPoint(_this._transform, owner.boundingSphere.center, new f))
    }) : owner instanceof GlobeSurfaceTileProvider && (this._transform = clippingPlanes.modelMatrix,
    u(origin) || (this._origin = Matrix4.getTranslation(clippingPlanes.modelMatrix, new f))),
    Promise.resolve(s).then(function() {
        for (let a = 0; a < clippingPlanes.length; a++)
            _this._addPlane(clippingPlanes.get(a));
        e(_this)
    }).catch(t)
}
;
ClippingPlanesEditor.prototype._addPlane = function(options) {
    let _this = this, movePlanesToOrigin = this._movePlanesToOrigin, primitives = this._primitives, o;
    planeSizeInMeters = this._planeSizeInMeters, s = this._pixelSize, a = this._maximumSizeInMeters;
    let primitiveOptions = this._primitiveOptions;
    let target = _this._target, origin = _this._origin, transform = _this._transform, p = Matrix4.inverse(transform, new Matrix4);
    Matrix4.equals(transform, Matrix4.IDENTITY) ? (o = origin,
    movePlanesToOrigin && (options.distance = 0)) : (o = Fvt(transform, origin, options, Pvt),
    movePlanesToOrigin && Vvt(transform, origin, options)),
    u(planeSizeInMeters) || (planeSizeInMeters = _this._computePlaneSize(target));
    let _ = Matrix4.multiplyByPoint(p, o, Nvt)
      , m = Matrix4.fromTranslation(_);
    primitives.add(new ClippingPlanePrimitive({
        transform: transform,
        localTransform: m,
        clippingPlane: options,
        show: _this._active,
        size: planeSizeInMeters,
        disableDepthFail: primitiveOptions.disableDepthFail,
        outlineColor: primitiveOptions.outlineColor,
        frontColor: primitiveOptions.frontColor,
        backColor: primitiveOptions.backColor,
        highlightColor: primitiveOptions.highlightColor,
        pixelSize: s,
        maximumSizeInMeters: a
    }))
}
;
ClippingPlanesEditor.prototype._computePlaneSize = function(e) {
    if (e instanceof GlobeSurfaceTileProvider)
        return new z(200,200);
    let t = e.boundingSphere.radius * .5;
    return new z(t,t)
}
;
ClippingPlanesEditor.prototype._removePlane = function(e) {
    let t = this._primitives;
    for (let n = 0; n < t.length; n++) {
        let i = t.get(n);
        if (i.clippingPlane === e) {
            t.remove(i);
            break
        }
    }
}
;
ClippingPlanesEditor.prototype._handleLeftDown = function(e) {
    let t = this._scene;
    if (t.mode !== te.SCENE3D)
        return;
    let n = t.pick(e.position);
    if (u(n) && u(n.id) && n.id.plane instanceof ClippingPlanePrimitive) {
        let i = n.id.plane;
        i.highlight(true);
        let o = i._normalWC
          , r = f.cross(o, t.camera.directionWC, Ovt);
        r = f.cross(o, r, r),
        r = f.normalize(r, r),
        this._draggingPlane = xt.fromPointNormal(i.centerPosition, r, this._draggingPlane),
        t.screenSpaceCameraController.enableInputs = false,
        this._pickedPlane = i,
        t.requestRenderMode && t.requestRender()
    }
}
;
ClippingPlanesEditor.prototype._handleLeftUp = function() {
    let e = this._scene;
    if (e.mode !== te.SCENE3D)
        return;
    let t = this._pickedPlane;
    u(t) && (t.highlight(false),
    this._pickedPlane = void 0,
    e.requestRenderMode && e.requestRender()),
    e.screenSpaceCameraController.enableInputs = true
}
;
ClippingPlanesEditor.prototype._handleMouseMove = function(e) {
    let scene = this._scene;
    if (scene.mode !== te.SCENE3D)
        return;
    let n = this._pickedPlane;
    if (u(n)) {
        let i = this._draggingPlane
          , o = scene.camera.getPickRay(e.startPosition, Dwe)
          , r = kn.rayPlane(o, i, wwe);
        if (!u(r))
            return;
        o = scene.camera.getPickRay(e.endPosition, Dwe);
        let s = kn.rayPlane(o, i, vwe);
        if (!u(s))
            return;
        let a = f.subtract(r, n.centerPosition, wwe);
        a = f.projectVector(a, n._normalWC, a);
        let c = f.subtract(s, n.centerPosition, vwe);
        c = f.projectVector(c, n._normalWC, c);
        let l = f.subtract(c, a, Bvt)
          , d = Matrix4.inverse(n.transform, Rvt)
          , h = Matrix4.multiplyByPointAsVector(d, l, Lvt);
        Matrix4.multiplyByTranslation(n.localTransform, h, n.localTransform),
        scene.requestRenderMode && scene.requestRender()
    } else {
        u(this._hoverPlane) && this._hoverPlane.highlight(false);
        let i = scene.pick(e.endPosition);
        if (u(i) && u(i.id) && i.id.plane instanceof ClippingPlanePrimitive) {
            let o = i.id.plane;
            o.highlight(true),
            this._hoverPlane = o
        }
    }
}
;
ClippingPlanesEditor.prototype.reset = function() {
    let primitives = this._primitives;
    for (let t = 0; t < primitives.length; t++)
        primitives.get(t).reset()
}
;
ClippingPlanesEditor.prototype.isDestroyed = function() {
    return false
}
;
ClippingPlanesEditor.prototype.destroy = function() {
    return this.deactivate(),
    this._sseh.destroy(),
    this._scene.primitives.remove(this._primitives),
    this._removeAddEventListener(),
    this._removeRemoveEventListener(),
    destroyObject(this)
}
;