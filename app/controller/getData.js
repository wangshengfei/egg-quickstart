const Controller = require('egg').Controller;

class GetData extends Controller {
  async getArray() {
    const ctx = this.ctx;
    ctx.response.body = ['1','2','3']
  }
  async getObject() {
    const ctx = this.ctx;
    ctx.response.body = {
      a: '11',
      b: '22',
      c: [1,2,3]
    }
  }
  async getString() {
    const ctx = this.ctx;
    ctx.response.body = 'shengfei'
  }
}

module.exports = GetData;
