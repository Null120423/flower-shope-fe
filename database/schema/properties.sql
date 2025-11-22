-- PostgreSQL schema for properties table
CREATE TABLE IF NOT EXISTS properties (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  address TEXT NOT NULL,
  rating DECIMAL(3,2) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  property_images JSONB,
  min_area VARCHAR(50),
  max_area VARCHAR(50),
  min_bedrooms VARCHAR(20),
  max_bedrooms VARCHAR(20),
  min_bathrooms VARCHAR(20),
  max_bathrooms VARCHAR(20),
  parking_spaces VARCHAR(100),
  description JSONB,
  floor_plans JSONB,
  amenities JSONB,
  min_price VARCHAR(100),
  max_price VARCHAR(100),
  price_notes TEXT,
  legal_status VARCHAR(255),
  loan_support TEXT,
  handover_date VARCHAR(100),
  agent JSONB,
  quick_stats JSONB,
  status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'sold-out', 'archived')),
  property_type VARCHAR(100),
  city VARCHAR(100),
  district VARCHAR(100),
  ward VARCHAR(100),
  contractor VARCHAR(255),
  tags JSONB,
  meta_title VARCHAR(255),
  meta_description TEXT,
  view_count INTEGER DEFAULT 0,
  priority INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  units JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_properties_slug ON properties(slug);
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status);
CREATE INDEX IF NOT EXISTS idx_properties_property_type ON properties(property_type);
CREATE INDEX IF NOT EXISTS idx_properties_city ON properties(city);
CREATE INDEX IF NOT EXISTS idx_properties_district ON properties(district);
CREATE INDEX IF NOT EXISTS idx_properties_is_featured ON properties(is_featured);
CREATE INDEX IF NOT EXISTS idx_properties_created_at ON properties(created_at);

-- Create a trigger to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_properties_updated_at
    BEFORE UPDATE ON properties
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
