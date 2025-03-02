// variable ตัวแปร
// เป็นชื่อที่ตั้งเอง ใช้เก็บข้อมูล
// การใช้งานตัวแปร คือ เอาค่าไปเก็บในตัวแปร หรือ เอาค่าในตัวแปรมาใช้
//------------------------------
// var ไม่จำเป็นต้องกำหนดค่าแต่แลก สามารถเปลี่ยนค่าได้
var aa = 10
// let ไม่จำเป็นต้องกำหนดค่าแต่แลก สามารถเปลียนค่าได้
let bb = 20
// const ต้องกำหนดค่าแต่แรก ไม่สามารเปลียนค่าได้ เป็นตัวแปรแบบ Local
const cc = 30 

aa = 111
bb = 222
// cc = 333 error
{
    var wow = 10
    {
        console.log(wow)
        let wee = 20
        const woo = 30
        console.log(wee)
        console.log(woo)
    }
        console.log(wow)
        //console.log(wee) error
        //console.log(woo) error
    {
        console.log(woo)
    }
    console.log(woo)
}