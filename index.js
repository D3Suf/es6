class Message {

  /* constructor */
  constructor(text, created = 0) {
    this.text = text;
    this.created = Date.now() - created;
  }
  /* get && set to created */
  get created() {
    return this._created;
  }
  set created(created) {
    if (!created || isNaN(created)) {
      throw new Error('Invalid ceated');
    } else {
      this._created = created;
    }
  }

  /* get &6 set to text */
  get text() {
    return this._text;
  }
  set text(text) {
    if (!text) {
      throw new Error('Invalid text');
    } else {
      this._text = text;
    }
  }

  toString() {
    return `Message created at: ${this.created} - Text: ${this.text}`;
    // return 'Message created at: ' + this.created + '  - Text: ' + this.text;
  }
}

class ImageMessage extends Message {
  constructor(text, created, url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString() {
    return `This Photo ${super.toString()} ` +
      `Url: ${this.url} ` +
      `Thumbnail: ${this.thumbnail}`;
  }
}

var emptyMessage = new Message('Today');
var textMessage = new Message('Yesterday', 86400);
var photoMessage = new ImageMessage('Today Photo');

console.log(String(emptyMessage));
console.log(textMessage);
console.log(String(photoMessage));

console.log(photoMessage instanceof ImageMessage);
console.log(photoMessage instanceof Message);