const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://127.0.0.1:27017";

const a = [{
        id: "OA3529345034", //设备id
        brand: "西子OTIS", //品牌
        model: "XZ-2514", //型号
        refer: "中国联通湖州市分公司", //所属公司
        protectRefer: "讯达电梯管理服务公司湖州分公司", //维保单位
        phone: "0672-66558888", //联系电话
        location: "湖州市吴兴区太湖路599号2号楼东侧1号电梯", //安装位置
        installDate: "1586448000000", //安装日期 2020-04-17
        qualityCode: "2020041220000", //质检合格证编号
        qualityDate: "1587139200000", //发证日期 2020-04-18
        lastCheckDate: "1587398400000", //最近巡检日期 2020-04-21
        lastRepairDate: "1587398400000", //最近维修日期 2020-04-21
        errorTimes: 2, //电梯故障发生次数
        lastTime: "12", //持续运行时间
    },
    {
        id: "OA3529345035", //设备id
        brand: "西子OTIS", //品牌
        model: "XZ-2514", //型号
        refer: "中国联通湖州市分公司", //所属公司
        protectRefer: "讯达电梯管理服务公司湖州分公司", //维保单位
        phone: "0672-66558888", //联系电话
        location: "湖州市吴兴区太湖路599号2号楼东侧2号电梯", //安装位置
        installDate: "1587052800000", //安装日期 2020-04-17
        qualityCode: "2020041220000", //质检合格证编号
        qualityDate: "1587139200000", //发证日期 2020-04-18
        lastCheckDate: "1587398400000", //最近巡检日期 2020-04-21
        lastRepairDate: "1587398400000", //最近维修日期 2020-04-21
        errorTimes: 6, //电梯故障发生次数
        lastTime: "12", //持续运行时间
    },
    {
        id: "OA3529345036", //设备id
        brand: "西子OTIS", //品牌
        model: "XZ-2514", //型号
        refer: "中国联通湖州市分公司", //所属公司
        protectRefer: "讯达电梯管理服务公司湖州分公司", //维保单位
        phone: "0672-66558888", //联系电话
        location: "湖州市吴兴区太湖路599号2号楼东侧3号电梯", //安装位置
        installDate: "1587052800000", //安装日期 2020-04-17
        qualityCode: "2020041220000", //质检合格证编号
        qualityDate: "1587133200000", //发证日期 2020-04-18
        lastCheckDate: "1587393400000", //最近巡检日期 2020-04-21
        lastRepairDate: "1587393500000", //最近维修日期 2020-04-21
        errorTimes: 5, //电梯故障发生次数
        lastTime: "1", //持续运行时间
    },
    {
        id: "OA3529345037", //设备id
        brand: "西子OTIS", //品牌
        model: "XZ-2514", //型号
        refer: "中国联通湖州市分公司", //所属公司
        protectRefer: "讯达电梯管理服务公司湖州分公司", //维保单位
        phone: "0672-66558888", //联系电话
        location: "湖州市吴兴区太湖路599号2号楼东侧4号电梯", //安装位置
        installDate: "1587052800000", //安装日期 2020-04-17
        qualityCode: "2020041220000", //质检合格证编号
        qualityDate: "1587133200000", //发证日期 2020-04-18
        lastCheckDate: "1587393400000", //最近巡检日期 2020-04-21
        lastRepairDate: "1587393500000", //最近维修日期 2020-04-21
        errorTimes: 5, //电梯故障发生次数
        lastTime: "1", //持续运行时间
    }
]
module.exports = DevicesDao = (req, res) => {
    MongoClient.connect(uri, (err, client) => {
        const collection = client.db("nfc").collection("devices").find({
            id: req.query.id
        }).toArray((err, result) => {
            if (err) {
                res.json({
                    code: 402,
                    msg: err.message,
                    data: ''
                })
                client.close();
                return
            }

            result.forEach((item) => {
                item.lastTime = Math.round((new Date().getTime() - Number.parseInt(item.installDate)) / 1000 / 3600)
            })

            res.json({
                code: 200,
                msg: 'success',
                data: result
            })
            client.close();
        });
    });
}