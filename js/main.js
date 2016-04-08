var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=9ff284cf-9447-496a-b0db-0d9e60fbb2e0";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
