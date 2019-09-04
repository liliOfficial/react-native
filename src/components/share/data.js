import React from 'react';
import { View, Text } from 'react-native';

export const filter = (input = ['2018-04-30','2018/04/30','20180418','04/09/2018'])=> {
    const reDate0 = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
    const reDate1 = /([0-9]{2})\/([0-9]{2})\/([0-9]{4})/;
    reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
    let output=[];
    
    for(let e of input ) {
      const match  = reDate0.exec(e);
      const match1 = reDate1.exec(e);
            if(match) {
              const year   = match[1], // 2018
                    month  = match[2], // 04
                    day    = match[3];
              output.push(year+month+day);
            }
      if(match1) {
        const day = match1[1], month = match1[2], year = match1[3];
        output.push(year+month+day);
      }      
    }   
    console.log(output);
  }

