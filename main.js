
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const pagelogin = $('.login')
const pagecreateaccount = $('.signup')


const fastfood = {
    foods : [{
        name: "bun bo ",
        price : 30 ,
        description : "spicy"
    },
    {
        name: "banh trang",
        price : 20 ,
        description : "spicy"
    },
    {
        name: "piza",
        price : 50 ,
        description : "spicy"
    },
] ,
   

    handle : function (){
        // xu ly khi nhan nut login 
        pagelogin.onclick = this.gotopage.bind(this, "login.html")

        // xu ly khi nhan nut sign up 
        pagecreateaccount.onclick = this.gotopage.bind(this,"createaccount.html") 

    },
    gotopage : function (link) {
        window.location.href =link;
    },
    start : function(){
        this.handle()
    }
}
fastfood.start();
