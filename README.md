# pixi-nwjs-starter
Example App using pixiJS and Node-Webkit SDK for desktop x64.

### FEATURE
- include basic `package.json` + `jsconfig.json`+ `index.html` + `launch.json`.
- Node and v8 include in the engine , no need dependency.
- Basic hyrachi with PIXIv5: `nwjs.exe` => `index.html` => `main.js` => `app.js` => `info.js`.
- Easy start and show app with vsCode debugger SDK.
- Easy start with node commande.
- Easy `.zip` package distribution for desktop.
- Control & write on machine information demo.
- Based on HTML - CSS - JS - NWJS - NODE = CHROMIUM V8 
- Auto devTool with APK
- Auto resize with fixed resolution
- Sugar code es6 with class
- FullScreen and Refresh `F4` || `F5` for all desktop environement.
___

### PREVIEW
<img src="https://images2.imgbox.com/26/f0/M1CE50cJ_o.png" width="200" />

___
### Quick start
** Download || fork || gitClone || open in Desktop **

<img src="https://images2.imgbox.com/38/5f/NjtVaOBI_o.png" width="120" />


**CMD**
```bash
# clone the repo.
# --depth 1 removes all but one .git commit history (Optional).
git clone --depth 1 https://github.com/djmisterjon/pixi-nwjs-starter.git

# set change directory to repo
cd pixi-nwjs-starter

# install the dependencies via npm for intellisence (dev)
npm i

```
___
### RUN PREVIEW
**RUN CMD**
```bash
# in repot, easy start via shell
nw.bat
# or 
node_modules\nw\nwjs\nw.exe .\
```

**RUN VSCODE**

Fast way is Click on the icon debug, select `nwjs node debug`.

It alrealy setup, but for customize edit the file `launch.json`.

<img src="https://images2.imgbox.com/2f/67/GhED8Pje_o.png" width="200" />

___

**CREATE DIST YOUR ONE CLICK APP.EXE x64**

- You should download your own `nwjs` version and architecture distribution at [dl.nwjs.io/](https://dl.nwjs.io/).
- download you nwjs distribution `dist-nwjs-x64`.
- Zip all `REPO` with your favorite tool
- Exludes folder `dist-nwjs-x64` and `node_modules`

<img src="https://images2.imgbox.com/35/f6/79b0czJI_o.png" width="200" />

- rename the zip if you want! EX: `ress.nw`.
- now create app

```bash
# move in .
move ress.nw ./dist-nwjs-x64

# change directory
cd ./dist-nwjs-x64

# package in myGame.exe
copy /b nw.exe+ress.nw myAPP.exe

```
- `myAPP.exe` it your application, people should not allow to uncompresse ressource.
___
### LEARN MORE
[WebApp to DesktopApp with Node-Webkit at HTML5devconf ](https://github.com/dakom/html5-boilerplate/tree/react)
(Published on Jan 28, 2014)
___
### END NOTE
- When you run the demo , it create a file `sysinfo.txt` in `REPO`.
- the file `demo.js` are for example, just remove `$demo.initialize();` in `app.js`. 
- the distribution version are more fast and dont have DevTools. 

