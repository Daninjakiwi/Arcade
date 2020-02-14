//Used to abstract the use of canvas graphics contextual
//Can also be used to create a sub-section within a canvas
class Graphics {
	constructor(ctx,width,height,offsetx,offsety) {
		this.ctx = ctx;
		this.w = width;
		this.h = height;
		this.offsetx = offsetx;
		this.offsety = offsety;
	}
	
	fill(colour) {
		this.ctx.fillStyle = colour;
		this.ctx.fillRect(this.offsetx,this.offsety,this.w,this.h);
	}
	
	drawRect(x,y,w,h,colour) {		
		if (x + w > this.w) {
			w = this.w - x;
		}
		
		if (y + h > this.h) {
			h = this.h - y;
		}
		
		if (y < 0) {
			h = h + y;
			y = 0;
			if (h < 0) {
				h = 0;
			}
		}
		
		if (x < 0) {
			w = w + x;
			x = 0;
			if (w < 0) {
				w = 0;
			}
		}
				
		this.ctx.fillStyle = colour;
		this.ctx.fillRect(this.offsetx + x,this.offsety + y,w,h);
	}
	
	drawText(x,y,text,font,colour) {
		this.ctx.font = font;
		this.ctx.fillStyle = colour;
		this.ctx.fillText(text,this.offsetx + x,this.offsety + y);
	}
	
	drawImage(x,y,w,h,clipx,clipy,img) {
		if (img.width != 0) {
			this.ctx.drawImage(img,clipx,clipy,w,h,this.offsetx + x,this.offsety + y,w,h);
		} else {
			this.drawRect(x,y,w,h,"#FFFFFF");
		}
	}
}