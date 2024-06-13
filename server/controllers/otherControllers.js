import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import {sendEmail} from "../utils/sendEmail.js";
import { Stats } from "../models/Stats.js";


export const contact=catchAsyncError(async(req,res,next)=>{
    const {name,email,message}=req.body;
    if(!name || !email || !message)return next(new ErrorHandler("all fields are mandatory"));
    const to=process.env.MY_MAIL;
    const subject="contact from your-tutor";
    const text=`I am ${name} and my email is ${email} \n${message}`;
    
    await sendEmail(to,subject,text);
    res.status(200).json({
        success:true,
        message:"your message sent successfully",
    });
});


export const courseRequest=catchAsyncError(async(req,res,next)=>{
    const {name,email,course}=req.body;
    if(!name || !email || !course)return next(new ErrorHandler("all fields are mandatory"));
    const to=process.env.MY_MAIL;
    const subject="request for a course "; 
    const text=`I am ${name} and my email is ${email} please make a course on -- \n${course}`
    
    await sendEmail(to,subject,text);
    res.status(200).json({
        success:true,
        message:"request submitted ",
    });
});

// export const getDashboardStats=catchAsyncError(async(req,res,next)=>{
//     const stats=await Stats.find({}).sort({createdAt:"desc"}).limit(12);

//     const statsData = [];
//     for(let i=0;i<stats.length;i++){
//         statsData.push(stats[i]);
//     }
//     const requiredSize=12-stats.length;
    
//     for(let i=0;i<requiredSize;i++){
//         statsData.unshift({
//             users:0,
//             subscriptions:0,
//             views:0,
//         })
//     }

//     const usersCount=statsData[11].users;
//     const subscriptionsCount=statsData[11].users;
//     const viewsCount=statsData[11].users;

//     let usersPercent=0;
//     let subscriptionsPercent=0;
//     let viewsPercent=0;

//     let usersProfit=true,viewsProfit=true,subscriptionsProfit=true;

//     if(statsData[10].users === 0 ){
//         usersPercent=usersCount*100;
//     }else{
//         const difference={
//             users:statsData[11].users-statsData[10].users,
//         };
//         usersPercent=difference.users/statsData[10].users*100;
//         if(usersPercent < 0)usersProfit=false;
//     }
//     if(statsData[10].subscriptions === 0 ){
//         subscriptionsPercent=subscriptionsCount*100;
//     }else{
//         const difference={
//             subscriptions:statsData[11].subscriptions-statsData[10].subscriptions,
//         };
//         subscriptionsPercent=difference.subscriptions/statsData[10].subscriptions*100;
//         if(subscriptionsPercent < 0)subscriptionsProfit=false;

//     }
//     if(statsData[10].views === 0 ){
//         viewsPercent=viewsCount*100;
//     }else{
//         const difference={
//             views:statsData[11].views-statsData[10].views,
//         };
//         viewsPercent=difference.views/statsData[10].views*100;
//         if(viewsPercent < 0)viewsProfit=false;
//     }

//     res.status(200).json({
//         success:true,
//         stats:statsData,
//         usersCount,
//         subscriptionsCount,
//         viewsCount,
//         subscriptionsPercent,
//         viewsPercent,
//         usersPercent,
//         subscriptionsProfit,
//         viewsProfit,
//         usersProfit
//     });
// });


export const getDashboardStats = catchAsyncError(async (req, res, next) => {
    const stats = await Stats.find({}).sort({ createdAt: "desc" }).limit(12);
  
    const statsData = [];
  
    for (let i = 0; i < stats.length; i++) {
      statsData.unshift(stats[i]);
    }
    const requiredSize = 12 - stats.length;
  
    for (let i = 0; i < requiredSize; i++) {
      statsData.unshift({
        users: 0,
        subscription: 0,
        views: 0,
      });
    }
  
    const usersCount = statsData[11].users;
    const subscriptionCount = statsData[11].subscription;
    const viewsCount = statsData[11].views;
  
    let usersPercentage = 0,
      viewsPercentage = 0,
      subscriptionPercentage = 0;
    let usersProfit = true,
      viewsProfit = true,
      subscriptionProfit = true;
  
    if (statsData[10].users === 0) usersPercentage = usersCount * 100;
    if (statsData[10].views === 0) viewsPercentage = viewsCount * 100;
    if (statsData[10].subscription === 0)
      subscriptionPercentage = subscriptionCount * 100;
    else {
      const difference = {
        users: statsData[11].users - statsData[10].users,
        views: statsData[11].views - statsData[10].views,
        subscription: statsData[11].subscription - statsData[10].subscription,
      };
  
      usersPercentage = (difference.users / statsData[10].users) * 100;
      viewsPercentage = (difference.views / statsData[10].views) * 100;
      subscriptionPercentage =
        (difference.subscription / statsData[10].subscription) * 100;
      if (usersPercentage < 0) usersProfit = false;
      if (viewsPercentage < 0) viewsProfit = false;
      if (subscriptionPercentage < 0) subscriptionProfit = false;
    }
  
    res.status(200).json({
      success: true,
      stats: statsData,
      usersCount,
      subscriptionCount,
      viewsCount,
      subscriptionPercentage,
      viewsPercentage,
      usersPercentage,
      subscriptionProfit,
      viewsProfit,
      usersProfit,
    });
  });

  export const getCompanyClientId = catchAsyncError(async(req,res,next) => {
    res.status(200).json({
      success:true,
      clientId:process.env.SSO_CLIENT_ID
    });
  });
  