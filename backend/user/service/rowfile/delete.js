const deleterowfileservice =  async(id, userid) => {
    const session = await mongoose.startSession();
        await session.withTransaction(async () => {
            const user = await userModel.findOne({ _id: userid }).session(session)
            if(!user){
                throw new Error("user not found")
            }
            user.rowfilelist.pull(new mongoose.Types.ObjectId(id))
            await user.save({ session });
            await rowFiles.findByIdAndDelete(id).session(session);
        })
     
        if (error) {
            throw new Error("somting went wrong")
        }
        
        session.endSession();
}


export default deleterowfileservice