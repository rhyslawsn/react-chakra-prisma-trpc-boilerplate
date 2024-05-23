import { createClient } from '@supabase/supabase-js';

import { ENV } from './env.config';

const supabase = createClient(
  ENV.SUPABASE_URL || '',
  ENV.SUPABASE_API_KEY || '',
);

export { supabase };
