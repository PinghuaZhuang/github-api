import Request from './request';
import adapter from 'flyio/dist/npm/adapter/dsbridge';
import EngineWrapper from 'flyio/dist/npm/engine-wrapper'

const dsEngine = EngineWrapper(adapter);

export const request = new Request({
  engine: dsEngine,
});
