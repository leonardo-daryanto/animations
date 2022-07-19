enum switchEnum {
    //% block="yes"
    Yes,
    //% block="no"
    No,
}
namespace images {
    /**
     *  make a animation
     */
    //% block
    //% group="animation"
    export function  createAnimation(makeAnimation: TemplateStringsArray, image: Image): void {

        let animation = [makeAnimation]
    }
    /**
     *  makes a animation
     */
    //% block
    //% group="getAnimation"
    export function openAnimation(doAnimation: switchEnum): void {
        
        
        if (doAnimation == 0) {
            
            images.createAnimation
        } else if (doAnimation == 1) {
            
            basic.clearScreen()
        }

        

    }
}
