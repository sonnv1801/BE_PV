const Relax = require("../models/Relax");

const relax = {
  getAllListRelax: async (req, res) => {
    try {
      const relaxList = await Relax.find().sort({ created_at: -1 }).exec(); // Sử dụng await và exec() để lấy kết quả từ Promise
      res.status(200).json(relaxList); // Trả về kết quả dưới dạng JSON
    } catch (error) {
      res.status(500).json(error); // Trả về lỗi nếu có
    }
  },

  createListRelax: async (req, res) => {
    try {
      let newRelax = new Relax({
        name: req.body.name,
        url: req.body.url,
      });
      await newRelax.save();
      res.status(200).json(newRelax);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteListRelax: async (req, res) => {
    try {
      const relaxlistId = req.params.id;
      const relaxlist = await Relax.findById(relaxlistId);
      if (!relaxlist) {
        return res.status(404).send("relaxlist not found");
      }
      await Relax.findByIdAndDelete(relaxlistId);
      res.status(200).json("relaxlist successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
};

module.exports = relax;
