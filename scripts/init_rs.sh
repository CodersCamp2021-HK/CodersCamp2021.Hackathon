#!/bin/bash

set -e

sleep 5

mongosh "mongo1:27017" <<EOF
  const rc = 1;
  try {
    if(rs.status().ok) {
      console.log("rs is running")
      rc = 0;
    }
  } catch(e) {
    console.log(e)
    rs.initiate();
    if(rs.status().ok) {
      console.log("rs initiated successfully")
      rc = 0;
    }
  }
  quit(rc)
EOF

exit $?
