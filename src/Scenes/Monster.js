class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 30;

        this.leftArmX = this.bodyX - 100;
        this.leftArmY = this.bodyY + 50;
        this.rightArmX = this.bodyX + 100;
        this.rightArmY = this.bodyY + 50;

        this.leftLegX = this.bodyX - 80;
        this.leftLegY = this.bodyY + 100;
        this.rightLegX = this.bodyX + 80;
        this.rightLegY = this.bodyY + 100;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 30;
        this.smileX = this.mouthX;
        this.smileY = this.mouthY;

        this.leftHornX = this.bodyX - 50;
        this.leftHornY = this.bodyY - 80;
        this.rightHornX = this.bodyX + 50;
        this.rightHornY = this.bodyY - 80;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenB.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenE.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_greenE.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_greenA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_greenA.png");
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human.png");
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.openMouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthC.png");
        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_dark_horn_small.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_dark_horn_small.png");
        my.sprite.openMouth.visible = false;
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        my.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        if (my.SKey.isDown) {
            my.sprite.smile.visible = true;
            my.sprite.openMouth.visible = false;
        }
        my.FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        if (my.FKey.isDown) {
            my.sprite.smile.visible = false;
            my.sprite.openMouth.visible = true;
        }
        my.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        if (my.AKey.isDown) {
            my.sprite.body.setX(this.bodyX = this.bodyX - 1);
            my.sprite.leftArm.setX(this.leftArmX = this.leftArmX - 1);
            my.sprite.rightArm.setX(this.rightArmX = this.rightArmX - 1);
            my.sprite.leftLeg.setX(this.leftLegX = this.leftLegX - 1);
            my.sprite.rightLeg.setX(this.rightLegX = this.rightLegX - 1);
            my.sprite.eye.setX(this.eyeX = this.eyeX - 1);
            my.sprite.openMouth.setX(this.mouthX = this.mouthX - 1);
            my.sprite.smile.setX(this.smileX = this.smileX - 1);
            my.sprite.leftHorn.setX(this.leftHornX = this.leftHornX - 1);
            my.sprite.rightHorn.setX(this.rightHornX = this.rightHornX - 1);
        }
        my.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        if (my.DKey.isDown) {
            my.sprite.body.setX(this.bodyX = this.bodyX + 1);
            my.sprite.leftArm.setX(this.leftArmX = this.leftArmX + 1);
            my.sprite.rightArm.setX(this.rightArmX = this.rightArmX + 1);
            my.sprite.leftLeg.setX(this.leftLegX = this.leftLegX + 1);
            my.sprite.rightLeg.setX(this.rightLegX = this.rightLegX + 1);
            my.sprite.eye.setX(this.eyeX = this.eyeX + 1);
            my.sprite.openMouth.setX(this.mouthX = this.mouthX + 1);
            my.sprite.smile.setX(this.smileX = this.smileX + 1);
            my.sprite.leftHorn.setX(this.leftHornX = this.leftHornX + 1);
            my.sprite.rightHorn.setX(this.rightHornX = this.rightHornX + 1);
        }
    }

}