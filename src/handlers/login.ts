module.exports = {
  login: function (data: any, response: any) {
    console.log(data,'data');
    return response.send(
      JSON.stringify({
          login: 'success'
      })
  );
  }
};
