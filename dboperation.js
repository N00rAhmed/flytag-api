var config = require("./dbconfig");
const sql = require("mssql");
 
async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log(" mathus-error :" + error);
  }
}
 

async function getdata_withQuery() {
    try {
      let pool = await sql.connect(config);
      
      let res = await pool.request().query("select [ENTRY_POINT1], [EXIT_POINT1], [RoutePoint], [DistanceNm], ROUND([Distance_km],0) AS [Distance_km], ROUND([Distance_km] * 0.44, 0) AS [fourty], ROUND([Distance_km] * 0.58, 0) AS [onehundredtwenty], ROUND([Distance_km] * 0.88, 0) AS [twohundredfifty], ROUND([Distance_km] * 1, 0) AS [threehundredfifty], ROUND([Distance_km] * 1.14, 0) AS [fourhundredfifty], ROUND([Distance_km] * 1.30, 0) AS [morefourhundredfifty] from [dbo].['Data File$']");
      // select * from dbo.['Data File$']                                                                                                                                                                                                                                                                                                                                                                                

      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }

  async function entrypoint() {
    try {
      let pool = await sql.connect(config);
      
      let res = await pool.request().query("select [ENTRY_POINT1] from [dbo].['Data File$']");
      // select * from dbo.['Data File$']
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }


  async function routepoint() {
    try {
      let pool = await sql.connect(config);
      
      let res = await pool.request().query("select [RoutePoint] from [dbo].['Data File$']");
      // select * from dbo.['Data File$']
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }

  async function exitpoint() {
    try {
      let pool = await sql.connect(config);
      
      let res = await pool.request().query("select [EXIT_POINT1] from [dbo].['Data File$']");
      // select * from dbo.['Data File$']
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }

  async function distancenm() {
    try {
      let pool = await sql.connect(config);
      
      let res = await pool.request().query("select [DistanceNm] from [dbo].['Data File$']");
      // select * from dbo.['Data File$']
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }


module.exports = {
  getdata: getdata,
  getdata_withQuery:getdata_withQuery,
  routepoint:routepoint,
  entrypoint:entrypoint,
  exitpoint:exitpoint,
  distancenm:distancenm
};
