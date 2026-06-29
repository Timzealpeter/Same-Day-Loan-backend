import Detail from "../models/Detail.js";

export async function getAllDetails(req, res) {
  try {
    const details = await Detail.find().sort({ createdAt: -1 });

    return res.status(200).json({ details });
  } catch (error) {
    console.log("Error in gettingAllDetails", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function createDetails(req, res) {
  try {
    const { email, password, isActive } = req.body;
    console.log("Received data:", { email, password, isActive }); // Debug log

    const detail = new Detail({
      email,
      password,
      isActive: isActive || false,
    });

    const savedDetail = await detail.save();
    res.status(201).json({ savedDetail });
  } catch (error) {
    console.error("Error in creating Note:", error); // ✅ Log the actual error
    console.error("Error message:", error.message); // ✅ Log the message
    console.error("Error stack:", error.stack); // ✅ Log the stack trace
    res.status(500).json({
      message: "internal server error",
      error: error.message, // ✅ Send error details (temporary for debugging)
    });
  }
}
