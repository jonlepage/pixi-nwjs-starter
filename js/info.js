class _Info {
    constructor() {
    };

    initialize(){
        // System details (CPU / Memory, etc)
        const os = require('os');
        // String which we'll write to file
        let content = '';
        // Platform Info
        content += `[Platform]
        'OS Type: ${os.platform()}'
        'OS Version: ${os.release()}'
        'OS Architecture: ${os.arch()}'
        `;
        // Memory info
        content += `\n[Memory]
        'Total: ${this.formatBytes(os.totalmem())}'
        'Free: ${this.formatBytes(os.freemem())}'
        'Free(%): ${(os.freemem() / os.totalmem() * 100).toFixed(2)}'
        `;
        // CPU Info
        content += `\n'[CPUs]'
        'Total Cores: ${os.cpus().length}'
        'Core Type: ${os.cpus()[0].model}'
        `;
        for (let i=0, y=0, c=content.split('\n'), l=c.length; i<l; i++) {
            const top = !(i%5);
            const txt = c[i];
            const info = new PIXI.Text(txt,{fontWeight: top?"bolder":"lighter" });
            info.position.set(10,y);
            y+=info.height//+(top?10:0);
            $app.stage.addChild(info);
        };
        this.writeFile('./sysinfo.txt',content);

        // add fun filters
        const filter = new PIXI.filters.NoiseFilter(4);
        filter.blendMode = 2;
        $app.stage.filters= [filter];
        PIXI.Ticker.shared.add((delta) => { filter.seed+=1 });
    };

    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };

    /** create a file in ROOT projet with node fs*/
    writeFile(path,content){
        // File operations
        const fs = require('fs');
        fs.writeFile(path, content, function(err){
            if (err){
                document.write('Error writing file');
            }else{
                fs.readFile(path, function(err, fileContent){
                    if (err){
                        document.write('Error reading written file');
                    };
                });
            };
        });
    };
};

let $info = new _Info();
console.log('%c _App', 'background: #222; color: #bada55',$info);