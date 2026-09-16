function Banner(){
let showBanner = true;
    return(<>
    {showBanner?<span>Promo Banner Here</span>: null}
    </>)
}
export default Banner