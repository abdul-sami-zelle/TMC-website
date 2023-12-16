import React from "react";
import { Button } from "react-bootstrap";

export default function SubAddonTab() {
    return (
        <div className="subAddonTab">
            <div className="imgSubAddon">
                <img src="https://www.kfcpakistan.com/images/6249b820-0513-11ee-9e45-cb0ed000d4a6-pepsicopy-2023-06-07091210.png" alt="" srcset="" />
            </div>
            <div className="contentSubAddon">
                <h3>
                    Cola Next
                </h3>
                <h4>
                    (RS+140)
                </h4>
            </div>
            
            <div className="btn_subAddon">
              <Button>ADD</Button>
            </div>
        </div>
    )
}