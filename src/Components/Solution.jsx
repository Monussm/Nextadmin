import React from "react";
const Solution=(props)=>{
    return <>
    <p className="text-center mt-4">{props.Right}</p>
    <h4 className="text-center">{props.Services}</h4>
    <div className="col-md-6 solid">
        <div className="row green">
            <div className="col-md-1 mt-4">
            <i className={props.fasolid}></i>
            </div>
            <div className="col-md-11">
                <div className="row">
                    <p>{props.single}</p>
                </div>
                <div className="row">
                    <h4>{props.look}</h4>
                </div>
            </div>
        </div>
        <div className="row  bg-light">
            <div className="col-md-1">
                <div className="row mt-2">
                <i className={props.famessage}></i>
                </div>
                <div className="row mt-4">
                 <i className= {props.fatimer}></i>
                </div>
                <div className="row mt-4">
                <i className={props.faclock}></i>
                </div>
            </div>
            <div className="col-md-11">
                <div className="row">
                <p>{props.with}</p>
                </div>
                <div className="row">
                <p>{props.off}</p>
                </div>
                <div className="row">
                <p>{props.day}</p>
                </div>
            </div>
        </div>
            <div className="row bg-light">
                <p>{props.check}</p>
            </div>
            <div className="row bg-light">
        <div className="col-md-1">
                <div className="row mt-2">
                <i className= {props.facheck}></i>
                </div>
                <div className="row mt-4">
                <i className={props.fachec}></i>
                </div>
                <div className="row mt-4">
                <i className={props.fachck}></i>
                </div>
            </div>
            <div className="col-md-11">
                <div className="row">
                <p>{props.ready}</p>
                </div>
                <div className="row">
                <p>{props.piece}</p>
                </div>
                <div className="row">
                <p>{props.need}</p>
                </div>
        </div>
            </div>
            <a className="Get-started mx-auto mb-3" href="#">{props.getstarted}</a>
            
    </div>
    <div className="col-md-6 solid">
        <div className="row green">
            <div className="col-md-1">
            <i class="fa-regular fa-notebook"></i>
            </div>
            <div className="col-md-11">
                <div className="row">
                    <p>{props.whole}</p>
                </div>
                <div className="row">
                    <h4>{props.App}</h4>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-1">
                <div className="row mt-2 ">
                <i className={props.famessage}></i>
                </div>
                <div className="row mt-4">
                 <i className= {props.fatimer}></i>
                </div>
                <div className="row mt-4">
                <i className={props.faclock}></i>
                </div>
            </div>
            <div className="col-md-11">
                <div className="row">
                <p>{props.with}</p>
                </div>
                <div className="row">
                <p>{props.off}</p>
                </div>
                <div className="row">
                <p>{props.day}</p>
                </div>
            </div>
        </div>
            <div className="row">
                <p>{props.check}</p>
            </div>
            <div className="row">
        <div className="col-md-1">
                <div className="row mt-2">
                <i className= {props.facheck}></i>
                </div>
                <div className="row mt-4">
                <i className={props.fachec}></i>
                </div>
                <div className="row mt-4">
                <i className={props.fachck}></i>
                </div>
            </div>
            <div className="col-md-11">
                <div className="row">
                <p>{props.ready}</p>
                </div>
                <div className="row">
                <p>{props.piece}</p>
                </div>
                <div className="row">
                <p>{props.need}</p>
                </div>
        </div>
            </div>
            <a className="Get-started mx-auto mb-3" href="#">{props.getstarted}</a>
    </div>
    </>




}
export default Solution;