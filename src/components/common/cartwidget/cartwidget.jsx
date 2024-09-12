import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const cartwidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};

export default cartwidget;
