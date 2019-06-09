class _App extends PIXI.Application {
    constructor(options={
        width: 1920, 
        height: 1080,                       
        antialias: true, 
        transparent: false,
        resolution: 1,
        sharedTicker:true,
        backgroundColor: 0x4f4f4f
        // powerPreference: SLI&CrossFire GPU, TODO: study me
      }) {
        super(options);
          document.body.appendChild(this.view);
          document.body.onresize = ()=>this.onResize();
    };

    /** getter return if nw */
    get isNwjs() { return typeof require === 'function' && typeof process === 'object' };

    /** init basic app stuf (debug.. listeners ..) */
    initialize(){
        this.initialize_nwjs();
        this.initialize_listener();
        $info.initialize();
    };

    /** setup window app nwjs and debugger */
    initialize_nwjs() {
        let win = nw.Window.get();
        //auto-start devTool chromium v8
        win.showDevTools();
        let gui = eval("require('nw.gui')"); // yes i know, eval unBreak vscode intellisence. tell me if you find a tricks
         // open demo page 
        gui.Window.open('https://pixijs.io/examples/#/demos-basic/container.js');
         // focus on app
        gui.Window.get().focus();
        // resize app
        let dw = 800 - window.innerWidth;
        let dh = 600 - window.innerHeight;
        window.moveBy(-dw / 2, -dh / 2);
        window.resizeBy(dw, dh);
    };

    initialize_listener(){
        document.addEventListener('contextmenu', event => {
            // allow rigth click on html div, but disable in canvas
            event.path[0] === this.renderer.view && event.preventDefault();
        });

        // disable nwjs right click
        document.addEventListener('keydown', (event) => {
            // F4 FULLSCREEN
            if(event.keyCode === 115){
                return this._fullScreen && this.cancelFullScreen() || this.requestFullScreen();
            };
            // F5 REFRESH
            if(event.keyCode === 116){
                document.location.reload(true);
            };
        });
    };

    onResize() {
        const canvas = this.view;
        let scaleX, scaleY, scale, center, margin;
        scaleX = window.innerWidth / canvas.offsetWidth;
        scaleY = window.innerHeight / canvas.offsetHeight;
        scale = Math.min(scaleX, scaleY);
        canvas.style.transformOrigin = "0 0";
        canvas.style.transform = "scale(" + scale + ")";
        if (canvas.offsetWidth > canvas.offsetHeight) {
            if (canvas.offsetWidth * scale < window.innerWidth) { center = "horizontally" }
            else { center = "vertically" };
        } else {
            if (canvas.offsetHeight * scale < window.innerHeight) { center = "vertically" }
            else { center = "horizontally"; };
        };
        if (center === "horizontally") {
            margin = (window.innerWidth - canvas.offsetWidth * scale) / 2;
            canvas.style .marginTop = 0 + "px";canvas.style .marginBottom = 0 + "px";
            canvas.style .marginLeft = margin + "px";canvas.style .marginRight = margin + "px";
        };
        if (center === "vertically") {
            margin = (window.innerHeight - canvas.offsetHeight * scale) / 2;
            canvas.style .marginTop  = margin + "px";canvas.style .marginBottom = margin + "px";
            canvas.style .marginLeft = 0      + "px";canvas.style .marginRight  = 0      + "px";
        };
        canvas.style.paddingLeft = 0 + "px";canvas.style.paddingRight  = 0 + "px";
        canvas.style.paddingTop  = 0 + "px";canvas.style.paddingBottom = 0 + "px";
        canvas.style.display = "-webkit-inline-box";
        return scale;
    };

    requestFullScreen() {
        var element = document.body;
        if (element.requestFullScreen) {
            element.requestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        this._fullScreen = true;
    };

    cancelFullScreen() {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        this._fullScreen = false;
    };
        

};

let $app = new _App();
console.log('%c _App', 'background: #222; color: #bada55',$app);


