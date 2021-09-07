# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ProductsController do
  describe 'GET #show' do
    it 'returns a PDF file' do
      get :show, params: { id: 'product', format: 'pdf' }
      expect(response.headers['Content-Type']).to have_content 'application/pdf'
    end
  end
end
