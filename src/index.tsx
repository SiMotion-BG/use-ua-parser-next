"use client"

import * as React from 'react';
import * as UAParser from 'ua-parser-js';
import { isMobile, isTouchDevice } from './helpers';

type IUseUAReturn = Omit<UAParser.IResult, 'ua'>;

const uaParser = new UAParser.UAParser();

function getDefaultString() {
  return typeof window !== "undefined" ? window.navigator.userAgent : ""
}

function useUA(uastring?: string) {
  uastring = uastring ?? getDefaultString()

  return React.useMemo<IUseUAReturn | null>(() => {
    try {
      uaParser.setUA(uastring as string);
      return {
        os: uaParser.getOS(),
        browser: uaParser.getBrowser(),
        cpu: uaParser.getCPU(),
        device: uaParser.getDevice(),
        engine: uaParser.getEngine(),
      };
    } catch (err) {
      return null;
    }
  }, [uastring]);
}

function useDevice(uastring?: string) {
  uastring = uastring ?? getDefaultString()

  return React.useMemo<UAParser.IResult['device'] | null>(() => {
    try {
      uaParser.setUA(uastring as string);
      return uaParser.getDevice();
    } catch (err) {
      return null;
    }
  }, [uastring]);
}

function useBrowser(uastring?: string) {
  uastring = uastring ?? getDefaultString()

  return React.useMemo<UAParser.IResult['browser'] | null>(() => {
    try {
      uaParser.setUA(uastring as string);
      return uaParser.getBrowser();
    } catch (err) {
      return null;
    }
  }, [uastring]);
}

function useCPU(uastring?: string) {
  uastring = uastring ?? getDefaultString()

  return React.useMemo<UAParser.IResult['cpu'] | null>(() => {
    try {
      uaParser.setUA(uastring as string);
      return uaParser.getCPU();
    } catch (err) {
      return null;
    }
  }, [uastring]);
}

function useEngine(uastring?: string) {
  uastring = uastring ?? getDefaultString()
  
  return React.useMemo<UAParser.IResult['engine'] | null>(() => {
    try {
      uaParser.setUA(uastring as string);
      return uaParser.getEngine();
    } catch (err) {
      return null;
    }
  }, [uastring]);
}

export { useUA, useDevice, useBrowser, useCPU, useEngine, isMobile, isTouchDevice };
