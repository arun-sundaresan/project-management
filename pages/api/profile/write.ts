// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserProfile } from '../../../models/profile'

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserProfile[]>) {
  const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_ANON_KEY || '')

  let result = await supabase.from('Profile').update(req.body)
  res.status(200).json(result.data || [])
}
