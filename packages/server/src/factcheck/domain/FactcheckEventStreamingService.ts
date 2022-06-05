import { Observable } from 'rxjs';

import { FactcheckEvent } from './FactcheckEvent';

abstract class FactcheckEventStreamingService {
  abstract stream(token?: string): Promise<Observable<FactcheckEvent>>;
}

export { FactcheckEventStreamingService };
