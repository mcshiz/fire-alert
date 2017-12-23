import React from 'react'
import { ToTitleCase, ParseISODate } from '../utilities/helpers'

class FireDescription extends React.Component {

    displayAttributes(fire){
        let listItems = [];
        let i =0;
        let excludeAttrs = [
            "id",
            "lat",
            "lon",
            "irwin_id",
            "geom",
            "type"
        ];
        for(let key in fire) {
            i++;
            if(fire[key] && excludeAttrs.indexOf(key) < 0) {
                let value = fire[key];
                let prettyKey = key.replace(/_/g, " ");

                if(prettyKey.toLowerCase().indexOf("date") > -1) {
                    value = ParseISODate(fire[key])
                } else if (prettyKey.toLowerCase() === "ros") {
                    prettyKey = "Rate of Spread"
                } else if (prettyKey.toLowerCase() === "roc") {
                    prettyKey = "Rate of Containment"
                }

                listItems.push(
                    <li key={i}><b>{ToTitleCase(prettyKey)}:</b> {value}</li>
                )
            }
        }
        return listItems
    }
    render(){
        let list = this.displayAttributes(this.props.fireInformation);
        return (
            <div className="panel panel-default">
                <div className="panel-heading text-left">{this.props.fireInformation.name}</div>
                <div className="panel-body">
                    {list}
                </div>
            </div>
        )

    }
}

export default FireDescription