import {randomIntFromInterval} from "./random";
import {getFullColor, getFullColorHex, getFullColorHsl} from "./color";
import SimplexNoise from 'simplex-noise';
import noise from './perlin';

export class Branch {
    private x: number;
    private y: number;
    private prevx: number;
    private prevy: number;
    private visible: boolean;
    private color: string;
    private speed: {x: number, y: number};
    private simplex: SimplexNoise;
    private canvas: HTMLCanvasElement;
    private createdTime: number;
    private noise: any;

    constructor (x: number, y: number, canvas: HTMLCanvasElement, seed: number) {
        this.x = x;
        this.y = y;
        this.prevx = x;
        this.prevy = y;
        this.visible = true;
        this.color = getFullColor(randomIntFromInterval(150, 250), 150, 150, 0.25);
        this.speed = {
            x: randomIntFromInterval(-7, 7),
            y: randomIntFromInterval(-7, 7)
        };
        this.simplex = new SimplexNoise(seed);
        noise.seed(seed);
        this.canvas = canvas;
        this.createdTime = (new Date()).getMilliseconds();
    }
    walls () {
        this.prevx = this.x;
        this.prevy = this.y;
        if (this.x < 0 || this.x > this.canvas.width || this.y < 0 || this.y > this.canvas.height) {
            this.visible = false;
        }
    }
    draw () {
        const ctx = this.canvas.getContext('2d');
        const d = new Date();
        if (ctx) {
            const runningForMilliseconds = (d.getMilliseconds() - this.createdTime) * 0.3;
            this.color = getFullColorHsl(runningForMilliseconds % 360, 100, 50);
            ctx.globalCompositeOperation = 'screen';
            ctx.beginPath();
            ctx.moveTo(this.prevx, this.prevy);
            ctx.lineTo(this.x, this.y);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.lineCap = "butt";
            ctx.stroke();
        }
        requestAnimationFrame(() => {
            if(this.isVisible()){
                this.moveNoise();
                this.draw();
                this.walls();
            }
        });
    }

    moveStraight () {
        this.x += this.speed.x * 5;
        this.y += this.speed.y * 5;
    }
    moveRandom () {
        this.speed.x += randomIntFromInterval(-10, 10);
        this.speed.y += randomIntFromInterval(-10, 10);
        this.x += this.speed.x;
        this.y += this.speed.y;
    }
    moveNoise () {
        const d = new Date();
        const runningForMilliseconds = d.getMilliseconds() - this.createdTime;
        this.speed.x += noise.perlin3(this.x * 0.005, this.y * 0.005, runningForMilliseconds * 0.0001) * 2;
        this.speed.y += noise.perlin3(this.y * 0.005, this.x * 0.005, runningForMilliseconds * 0.0001) * 2;
        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    isVisible () {
        return this.visible;
    }
}

export const createBranches = (amount: number, canvas: HTMLCanvasElement): Branch[] => {
    const ctx = canvas.getContext('2d');
    if(ctx){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }

    const branches: Branch[] = [];
    for (let i=0; i<amount; i++) {
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        branches.push(new Branch(x, y, canvas, randomIntFromInterval(0, 10000)));
    }
    return branches;
};


export class GlitchText {
    private x: number;
    private y: number;
    private canvas: HTMLCanvasElement;
    private createdTime: number;
    private textOptions: string[];
    private index: number;
    private imageObjShadow = new Image();
    private imageObjWithShadow = new Image();
    private imageDataShadows: string;

    constructor (textOptions: string[], x: number, y: number, canvas: HTMLCanvasElement, seed: number) {
        this.x = x;
        this.y = y;
        this.textOptions = textOptions;
        this.canvas = canvas;
        this.createdTime = (new Date()).getMilliseconds();
        this.imageDataShadows = '';
        this.index = 0;
        this.getShadowsImg();
        const ctx = canvas.getContext('2d');
        if(ctx){
            ctx.clearRect(0,0,canvas.width,canvas.height);
        }
    }

    setTextOptions(textOptions: string[]){
        this.index = 0;
        this.textOptions = textOptions;
    }

    getText(): string {
        const currentIndex = this.index;
        return this.textOptions[currentIndex];
    }

    nextTextOption() {
        this.index = (this.index + 1) % this.textOptions.length;
    }

    drawText(){
        const ctx = this.canvas.getContext('2d');
        if(ctx){
            ctx.font = "bold 70px Roboto";
            ctx.fillStyle = "#FFFFFF";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(this.getText(), this.x, this.y);
        }
    }
    lineShadows () {
        return Math.floor(Math.random() * (7 - 4 + 1) + 4);
    };

    lineShadowsHeight () {
        var h = this.canvas.height;
        var count = this.lineShadows();
        var arr = [];
        var s = 0;

        for (var i = 0; i < count; i++)
        {
            arr[i] = Math.floor(Math.random() * (h/(count-1)- 2 + 1) + 2);
            h = h -  arr[i];
            s = s + arr[i];
            arr[count] = this.canvas.height - s;
        }
        return arr;
    }

    offset()
    {
        return Math.floor(Math.random() * (3 - 2 + 1) + 2)*0.8;
    }

    getShadowsImg(){
        const ctx = this.canvas.getContext('2d');
        if(ctx){
            ctx.save();
            ctx.font = "70px Roboto";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.globalCompositeOperation = "destination-over";
            ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
            ctx.fillStyle = "#a3004a";
            ctx.fillText(this.getText(), this.x-2, this.y);
            ctx.fillStyle = "#09c4de";
            ctx.fillText(this.getText(), this.x+2, this.y);
            ctx.restore();
        }
        this.imageDataShadows = this.canvas.toDataURL("image/png", 1.0);
    }

    timeBack(){
        var max = 300;
        var min = 80;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    glitch(){
        const ctx = this.canvas.getContext('2d');
        let self = this;
        let imageDataWithShadow = '';
        this.imageObjShadow.onload = function() {
            if(ctx){
                ctx.clearRect(0,0, self.canvas.width, self.canvas.height);
                var arr = self.lineShadowsHeight();
                var sy = 0;
                for (var i = 0; i < arr.length; i++)
                {
                    ctx.drawImage(self.imageObjShadow, 0, sy, self.canvas.width, arr[i], randomIntFromInterval(-2*self.offset(), 2*self.offset()), sy, self.canvas.width, arr[i]);
                    sy = sy + arr[i];
                }
                self.drawText();
                imageDataWithShadow = self.canvas.toDataURL("image/png", 1.0);

                self.imageObjWithShadow.onload = function() {
                    ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
                    ctx.drawImage(self.imageObjShadow, 0, 0, self.canvas.width, self.canvas.height/3+5, 1, 0, self.canvas.width, self.canvas.height/3+5);
                    ctx.drawImage(self.imageObjShadow, 0, self.canvas.height/3+5, self.canvas.width, self.canvas.height/3-5, 0, self.canvas.height/3+5, self.canvas.width, self.canvas.height/3-5);
                    ctx.drawImage(self.imageObjShadow, 0, (self.canvas.height/3)*2, self.canvas.width, self.canvas.height/3, 0, (self.canvas.height/3)*2, self.canvas.width, self.canvas.height/3);
                };
                self.imageObjWithShadow.src = imageDataWithShadow;
            }

        };
        self.imageObjShadow.src = this.imageDataShadows;

        setTimeout(function(){
            const ctx = self.canvas.getContext('2d');
            self.imageObjWithShadow.onload = function() {
                if(ctx){
                    ctx.clearRect(0,(self.canvas.height/3)*2,self.canvas.width,self.canvas.height/3);
                    var arr = self.lineShadowsHeight();
                    var sy = 0;
                    for (var i = 0; i < arr.length; i++)
                    {
                        ctx.drawImage(self.imageObjWithShadow, 0, sy, self.canvas.width, arr[i], randomIntFromInterval(-2*self.offset(), 2*self.offset()), sy, self.canvas.width, arr[i]);
                        sy = sy + arr[i];
                    }
                }
            };
            self.imageObjWithShadow.src = imageDataWithShadow;
        },80);


        setTimeout(function(){
            const ctx = self.canvas.getContext('2d');
            if(ctx){
                ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
                self.nextTextOption();
                self.drawText();
            }

        },self.timeBack());
    }
}


