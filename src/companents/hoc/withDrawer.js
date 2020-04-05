import DrawerCustom from "../Drawer/DrawerCustom";
import React from "react";

const drawerWidth = 240;

export function withDrawer(WrappedComponent) {
    return class WithDrawer extends React.Component {
        render() {
            return (
                <div>
                    <DrawerCustom
                        style={{
                            width: drawerWidth,
                            flexShrink: 0
                        }}
                    />
                    <WrappedComponent/>
                </div>
            )
        }
    }

}