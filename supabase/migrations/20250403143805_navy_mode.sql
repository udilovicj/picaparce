/*
  # Fix menu items RLS policies

  1. Changes
    - Drop existing policies on menu_items table
    - Add new policies for:
      - Public read access (anyone can view menu items)
      - Authenticated users can manage items (create, update, delete)

  2. Security
    - Enable RLS on menu_items table
    - Add policies for both public and authenticated users
*/

-- First enable RLS if not already enabled
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to start fresh
DROP POLICY IF EXISTS "Allow authenticated users to manage items" ON menu_items;
DROP POLICY IF EXISTS "Allow public read access" ON menu_items;

-- Create new policies

-- Allow anyone to read menu items
CREATE POLICY "Allow public read access"
ON menu_items
FOR SELECT
TO public
USING (true);

-- Allow authenticated users to manage items
CREATE POLICY "Allow authenticated users to manage items"
ON menu_items
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);