const experss=require('express');
const bookController=require("../controllers/bookcontroller");
const router=experss.Router();

// create book
router.get("/create", bookController.book_create_get);
router.get("/:id", bookController.book_details);
router.delete("/:id", bookController.book_delete);
router.get("/", bookController.book_index); 
router.post("/", bookController.book_create_post);

module.exports = router;