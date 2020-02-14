class AnimatedButton {
	constructor(x,y,width,height,img,num_frames,repeat_count) {
			this.x = x;
			this.y = y;
			this.w = width;
			this.h = height;
			this.img = img;
			this.num_frames = num_frames;
			this.count = 0;
			this.repeat_count = repeat_count;
			this.current = 0;
			this.hover = false;
	}
	
	draw(gfx) {
		if (this.hover == true) {
			gfx.drawRect(this.x - 5,this.y - 5,this.w + 10,this.h + 10,"#FFFFFF");
		}
		
		gfx.drawImage(this.x,this.y,this.w,this.h,0,this.h * this.current,this.img);
		
		if (this.hover == true) {
			this.count += 1;
			if (this.count >= this.repeat_count) {
				this.current += 1;
				if (this.current >= this.num_frames) {
					this.current = 1;
				}
				this.count = 0;
			}
		}
	}
	
	mouseMove(pos) {
		if (pos.x >= this.x && pos.x < this.x + this.w && pos.y >= this.y && pos.y <= this.y + this.h) {
			this.hover = true;
		} else {
			this.hover = false;
			this.current = 0;
		}
	}
}

class MainMenu {
	constructor(gfx) {
		this.gfx = gfx;
		
		var snakeImg = new Image();
		snakeImg.src = "images/snake_button.png";
		
		this.snakeBtn = new AnimatedButton(200,100,600,150,snakeImg,90,3);		
	}
	
	update() {
		this.gfx.fill("#0D0D0C");
		this.snakeBtn.draw(this.gfx);
	}
	
	mouseMove(pos) {
		this.snakeBtn.mouseMove(pos);
	}
	
	mousePress(mouse) {
		if (this.snakeBtn.hover == true && mouse.button == 0) {
			//Start snake game
		}
	}
	
	keyPress(key) {
	}
}
