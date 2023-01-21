const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const crystaxArray = [
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473061122080881/10.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473061583454311/1.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473061935775774/2.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473062237782057/3.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473062493634650/4.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473062824968202/5.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473063265386606/6.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473063756111912/7.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473064213291008/8.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473064603353208/9.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473119259336807/20.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473119536169060/11.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473119821385910/12.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473120203063366/13.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473120446337094/14.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473120786075752/15.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473121167757333/16.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473125768904815/17.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473126058315867/18.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473126339330108/19.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473166688526416/30.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473166948585522/21.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473167200239759/22.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473167485456556/23.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473167909077020/24.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473168278175846/25.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473168714375208/26.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473169012179056/27.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473169549053982/28.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473172199854192/29.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473242139865198/40.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473242508955688/31.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473242907422730/32.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473244547395584/33.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473244899708949/34.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473245277204500/35.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473245633712128/36.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473246753591327/37.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473247936393367/38.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473248292900894/39.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473289602617465/50.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473290038825054/41.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473290487607497/42.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473290940592168/43.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473291368415272/44.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473291884310599/45.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473292425379900/46.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473292798668821/47.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473293322965052/48.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473293725618266/49.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473313979899985/60.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473314239938650/51.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473314604843061/52.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473315011698768/53.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473315322069132/54.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473315565350962/55.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473315842171000/56.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473316081238076/57.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473316370657340/58.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473316626509824/59.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473378496696421/70.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473378756722809/61.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473379041939466/62.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473379314585600/63.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473379738189885/64.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473380044378112/65.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473380371529778/66.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473380644180069/67.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473381025861712/68.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473381264920627/69.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473412843847690/79.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473413179383828/80.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473413435228160/71.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473413737226240/72.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473413997273208/73.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473414248923136/74.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473414492201111/75.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473414764830823/76.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473414995509348/77.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473415318487180/78.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473763923857508/90.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473764225847409/81.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473764494286908/82.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473764754325606/83.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473765215707208/85.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473765568020571/86.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473765895180288/87.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473766910197761/89.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473779610562660/100.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473779979661383/91.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473780399083570/92.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473780801748992/93.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473781175029800/94.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473781581877248/95.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473781971955723/96.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473782349443162/97.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473782697562132/98.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473783045697536/99.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473984661684264/109.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473985081131108/110.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473985655750746/101.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473986125496410/102.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473986498789438/103.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473986935009360/104.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473988101029908/105.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473988449157231/106.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473988885360700/107.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029473989363499038/108.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029474109752614912/120.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029474110197215412/111.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029474110599860274/112.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029474111036072028/113.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029474111476469831/114.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029474111816212601/115.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029474112495685672/116.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029474113036750911/117.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029474113640738957/118.png",
    "https://cdn.discordapp.com/attachments/736699416320147487/1029474114030805044/119.png"
];

const exec = (message, args) => {
    
    let index = Math.floor(Math.random() * crystaxArray.length)
    
    return {
	string: (crystaxArray[index])
    };
}

const description = `Usage: ?crystax

Posts a randomized image of some femboy`;

const crystax = new Command("crystax", description, exec)
crystax.executeGroup = groups.everyone
crystax.parent = "randomized";

module.exports = crystax