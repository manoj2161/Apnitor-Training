import './keypad.css'
function Keypad(){
const buttons = [1,2,3,4,5,6,7,8,9]
    return(<>
    <div tabIndex={0} className='emergency' onKeyDown={(e)=>{
        e.stopPropagation();
        if(e.key==="Escape"){
            console.log("🚨 Emergency exit triggered");
        }
    }}>
    <div className='keypadBox' onClick={()=>{
        console.log("Panel touched");
        
    }}>
       {buttons.map((button)=>{
           return <button key={button} className='btn' onClick={(e)=>{
              e.stopPropagation();
               console.log(`Pressed: ${button}`);
            }}>{button}</button>
        })}
       <button className='btn' onClick={(e)=>{
          e.stopPropagation();
           console.log("Cleared");
           
        }}>Clear</button><button className='btn' onClick={(e)=>{
              e.stopPropagation();
            console.log("Submitted code attempt");
            
        }}>Enter</button>
    </div>
        </div>
    </>)
}
export default Keypad