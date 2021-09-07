# frozen_string_literal: true

class ProductsController < ApplicationController
  before_action :authenticate_user!
  before_action :identify_product

  def show
    send_file @path, disposition: "attachment; filename=#{@file}"
  end

  private

  def identify_product
    valid_characters = '^[0-9a-zA-Z]*$'
    if params[:id].blank?
      raise 'Filename missing'
    else
      @product_id = params[:id]
      @product_id = @product_id.tr("^#{valid_characters}", '')
    end
    if params[:format].blank?
      raise 'File extension missing'
    else
      @format = params[:format]
      @format = @format.tr("^#{valid_characters}", '')
    end

    @path = "app/views/products/#{@product_id}.#{@format}"
    @file = "#{@product_id}.#{@format}"
  end
end
