const mongoose = require("mongoose")



const student= mongoose.Schema({

        key:{type:String},
        name:{type:String},
        user:{type:String},
        password:{type:String},
        phone:{type:String},
        email:{type:String},
        image:{type:String},
        class:{type:String},
        age:{type:String},
        gender:{type:String},
        address:{type:String},

        allChat:[{
                date:{type:String},
                subject:{type:String},
                message:{type:String},
                myId:{type:String}
        }],
        managementChat:[{
                date:{type:String},
                subject:{type:String},
                message:{type:String},
                myId:{type:String},
        }],

        staffChat:[{
                 date:{type:String},
                 subject:{type:String},
                 message:{type:String},
                myId:{type:String},
        }],
                
        studentChat:[{
                 date:{type:String},
                 subject:{type:String},
                 message:{type:String},
                 myId:{type:String},
                }],
        attend:[{
                date:{type:String},
                mon:{type:String},
                tue:{type:String},
                wed:{type:String},
                thu:{type:String},
                fri:{type:String},
        }], 
        Eng:[{
                exam:{type:String},
                test:{type:String},
                ca:{type:String},
                ass:{type:String},
        }],
                 
        math:[{
                exam:{type:String},
                test:{type:String},
                ca:{type:String},
                ass:{type:String},
        }],
        chem:[{
                exam:{type:String},
                test:{type:String},
                ca:{type:String},
                ass:{type:String},
        }],
        phy:[{
                exam:{type:String},
                test:{type:String},
                ca:{type:String},
                ass:{type:String},
        }],
        bio:[{
                exam:{type:String},
                test:{type:String},
                ca:{type:String},
                ass:{type:String},
        }]
})

const teacher = mongoose.Schema({
        key:{type:String},
        name:{type:String},
        user:{type:String},
        class:[{class:{type:String}}],
        subject:[{subject:{type:String}}],
        password:{type:String},
        phone:{type:String},
        email:{type:String},
        image:{type:String},
        session:{type:String},
        term:{type:String},
        time:{type:String},
        type:{type:String},
        activity:{type:String},
        age:{type:String},
        linc:{type:String},
        gender:{type:String},
        address:{type:String},
        managementChat:[{
                date:{type:String},
                subject:{type:String},
                message:{type:String},
                myId:{type:String}
        }],

        staffChat:[{
                 date:{type:String},
                 subject:{type:String},
                myId:{type:String},
                message:{type:String},
                }],
                
        studentChat:[{
                 date:{type:String},
                 subject:{type:String},
                 message:{type:String},
                 myId:{type:String}
                }],
        allChat:[{
                date:{type:String},
                subject:{type:String},
                message:{type:String},
                myId:{type:String}
        }],
        Eng:[{
              question:{type:String},
              a:{type:String},
              b:{type:String},
              c:{type:String},
              d:{type:String},
              ans:{type:String},
              session:{type:String},
              term:{type:String},
              date:{type:String},
              type:{type:String}
        }],
       
           math:[{
                question:{type:String},
                a:{type:String},
                b:{type:String},
                c:{type:String},
                d:{type:String},
                ans:{type:String},
                session:{type:String},
                term:{type:String},
                date:{type:String},
                type:{type:String}
          }],
           chem:[{
                question:{type:String},
                a:{type:String},
                b:{type:String},
                c:{type:String},
                d:{type:String},
                ans:{type:String},
                session:{type:String},
                term:{type:String},
                date:{type:String},
                type:{type:String}
          }],
           phy:[{
                question:{type:String},
                a:{type:String},
                b:{type:String},
                c:{type:String},
                d:{type:String},
                ans:{type:String},
                session:{type:String},
                term:{type:String},
                date:{type:String},
                type:{type:String}
          }],
           bio:[{
              question:{type:String},
              a:{type:String},
              b:{type:String},
              c:{type:String},
              d:{type:String},
              ans:{type:String},
              session:{type:String},
              term:{type:String},
              date:{type:String},
              type:{type:String}
        }]
})


const staff = mongoose.Schema({
        key:{type:String},
        name:{type:String},
        user:{type:String},
        class:{type:String},
        password:{type:String},
        age:{type:String},
        gender:{type:String},
        address:{type:String},
        phone:{type:String},
        email:{type:String},
        image:{type:String},
        session:{type:String},
        term:{type:String},
        time:{type:String},
        type:{type:String},
        activity:{type:String},
        managementChat:[{
                date:{type:String},
                subject:{type:String},
                message:{type:String},
                myId:{type:String}
        }],

        staffChat:[{
                 date:{type:String},
                 subject:{type:String},
                myId:{type:String},
                message:{type:String},
                }],
                
        studentChat:[{
                 date:{type:String},
                 subject:{type:String},
                 message:{type:String},
                 myId:{type:String}
                }],
        allChat:[{
                date:{type:String},
                subject:{type:String},
                message:{type:String},
                myId:{type:String}
        }],
        Eng:[{
              question:{type:String},
              a:{type:String},
              b:{type:String},
              c:{type:String},
              d:{type:String},
              ans:{type:String},
              session:{type:String},
              term:{type:String},
              date:{type:String},
              type:{type:String}
        }],
       
           math:[{
                question:{type:String},
                a:{type:String},
                b:{type:String},
                c:{type:String},
                d:{type:String},
                ans:{type:String},
                session:{type:String},
                term:{type:String},
                date:{type:String},
                type:{type:String}
          }],
           chem:[{
                question:{type:String},
                a:{type:String},
                b:{type:String},
                c:{type:String},
                d:{type:String},
                ans:{type:String},
                session:{type:String},
                term:{type:String},
                date:{type:String},
                type:{type:String}
          }],
           phy:[{
                question:{type:String},
                a:{type:String},
                b:{type:String},
                c:{type:String},
                d:{type:String},
                ans:{type:String},
                session:{type:String},
                term:{type:String},
                date:{type:String},
                type:{type:String}
          }],
           bio:[{
              question:{type:String},
              a:{type:String},
              b:{type:String},
              c:{type:String},
              d:{type:String},
              ans:{type:String},
              session:{type:String},
              term:{type:String},
              date:{type:String},
              type:{type:String}
        }]
})

const management = mongoose.Schema({
        key:{type:String},
        name:{type:String},
        user:{type:String},
        password:{type:String},
        phone:{type:String},
        image:{type:String},
        email:{type:String},
        age:{type:String},
        gender:{type:String},
        address:{type:String},
        admissions:[{ key:{type:String} }],
        management:[{  key:{type:String}  }],
        staff:[{  key:{type:String}  }],
        teacher:[{  key:{type:String}  }],
        classes:[{  key:{type:String}  }],
        link:[{  link:{type:String},name:{type:String}  }],
        subject:[{  key:{type:String}}],
        allChat:[{
                date:{type:String},
                subject:{type:String},
                message:{type:String},
                myId:{type:String}
        }],
        managementChat:[{
                date:{type:String},
                subject:{type:String},
                message:{type:String},
                myId:{type:String}
        }],

        staffChat:[{
                 date:{type:String},
                 subject:{type:String},
                 message:{type:String},
                 myId:{type:String}
                }],

        studentChat:[{
                 date:{type:String},
                 subject:{type:String},
                 message:{type:String},
                 myId:{type:String}
              }]
})

const Student = mongoose.model("student",student)
const Teacher = mongoose.model("teacher",teacher)
const Staff = mongoose.model("staff",staff)
const Management = mongoose.model("Management",management)

module.exports = {Staff,
                  Student,
                  Teacher,
                  Management,
                };