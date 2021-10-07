class Student{
    constructor(ID, StudentCode, Name, Gender, Phone1, Phone2, Email, Image, Address, 
        ProvinceID, WardID, DistrictID, Birthday, Note, CreatBy, CreateDate, IsDelete, SearchText){
        this.ID = ID
        this.StudentCode = StudentCode
        this.Name = Name
        this.Gender = Gender
        this.Phone1 = Phone1
        this.Phone2 = Phone2
        this.Email = Email
        this.Image = Image
        this.Address = Address
        this.ProvinceID = ProvinceID
        this.WardID = WardID
        this.DistrictID = DistrictID
        this.Birthday = Birthday
        this.Note = Note
        this.CreatBy = CreatBy
        this.CreateDate = CreateDate
        this.IsDelete = IsDelete
        this.SearchText = SearchText
    }
}

module.exports = Student