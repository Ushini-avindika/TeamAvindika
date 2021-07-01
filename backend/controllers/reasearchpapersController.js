import Researchpaper from '../models/researchModel.js'

//get Approved ResearchPapers
const getApprovedResaerchPapers = async(req,res) => {
    try{
        const researchpaper = await Researchpaper.find({
            "researchPaper.approved": true,
        }).select(
            "researcherEmail reseracherPhoneNo researchPaper"
        );
        res.json(researchpaper);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

//get Unapproved researchpapers
const getUnApprovedResaerchPapers = async(req,res) => {
    try{
        const researchpaper = await Researchpaper.find({
            "researchPaper.approved": false,
        }).select(
            "researcherEmail reseracherPhoneNo researchPaper"
        );
        res.json(researchpaper);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

//Approved/Decline researchpapers
const approvalDecision = async (req, res) => {
    try {
        Researchpaper.findByIdAndUpdate(req.body.id)
        .then((existResearchPaper) => {
            existResearchPaper.researchpaper.approved = req.body.approved;
            existResearchPaper
            .save()
            .then((response) => res.json(response))
            .catch((err) => res.status(400).json("Error: "+err));
        })
        .catch((err) => res.status(400).json("Error:"+err));
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

export { getApprovedResaerchPapers,getUnApprovedResaerchPapers,approvalDecision }

