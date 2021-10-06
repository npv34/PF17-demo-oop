const MAX_PIN = 100;
class Mobile {

    constructor(name) {
        this.pin = MAX_PIN;
        this.message = '';
        this.inbox = [];
        this.outbox = [];
        this.status = false;
        this.name = name;
    }

    turnOne() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    changePin() {
        this.pin++;
    }

    writeMessage(text) {
        if (this.status) {
            this.pin--;
            this.message = text;
        } else {
            document.write("Dien thoai dang tat, vui long thu lai")
        }

    }

    sendMessage(phone) {
        // phone dong vai tro la 1 tham so  -> object Mobile 
        // phone dong vai tro la dien thoai nhan tin nhan 
        // this dong vai tro dien thoai gui tin nhan
        // su dung tham so phone nhu 1 doi tuong 
        phone.inbox.push(this.message);
        this.outbox.push(this.neessage);
    }

    readInbox() {
        for (let i = 0; i < this.inbox.length; i++) {
            document.write("Tin nhan " + (i + 1) + " " + this.inbox[i] + "<br>")
        }
    }


}

let iphone13 = new Mobile("Iphone 13");
let samsungNote10 = new Mobile('SS Note 10');
iphone13.writeMessage("Xin chao SS toi la Iphone day!");

iphone13.sendMessage(samsungNote10);

iphone13.writeMessage("Toi co the lam quen ban khong?");

iphone13.sendMessage(samsungNote10);

samsungNote10.writeMessage("Hi");
samsungNote10.sendMessage(iphone13);
iphone13.readInbox();