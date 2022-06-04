import { Observable } from 'rxjs';

import { FactcheckEvent } from './FactcheckEvent';

abstract class FactcheckEventStreamingService {
  abstract stream(token?: string): Observable<FactcheckEvent>;
}

export { FactcheckEventStreamingService };
