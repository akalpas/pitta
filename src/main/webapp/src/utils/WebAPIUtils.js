import request from 'superagent';

module.exports = {

  getEvents: function(success, error) {
    request.get('/events')
      .set('Accept', 'application/json')
      .end(function(error, res){
        if (res) {
          if (res.error) {
            error(res.error)
          } else {
            let json = JSON.parse(res.text);
            success(json)
          }
        }
      });
  }
  // ...
};