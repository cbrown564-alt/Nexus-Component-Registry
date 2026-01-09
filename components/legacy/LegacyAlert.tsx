import React from 'react';
import { AlertTriangle } from 'lucide-react';
import LegacyWindow from './LegacyWindow';
import LegacyButton from './LegacyButton';

const LegacyAlert = () => {
  return (
    <LegacyWindow title="System Error" className="w-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="p-4 flex gap-4 items-start">
        <AlertTriangle className="h-8 w-8 text-yellow-600 shrink-0" />
        <p className="text-sm font-mono leading-tight">
          An exception 0E has occurred at 0028:C0011E36 in VxD VMM(01) + 00010E36. 
          <br/><br/>
          Click OK to terminate the current application.
        </p>
      </div>
      <div className="flex justify-center gap-4 pb-4">
        <LegacyButton className="w-20">OK</LegacyButton>
        <LegacyButton className="w-20">Cancel</LegacyButton>
      </div>
    </LegacyWindow>
  );
};

export default LegacyAlert;