/*
 *
 * @licstart  The following is the entire license notice for the 
 * JavaScript code in this page.
 * 
 * Copyright (c) 2012-2013 RockStor, Inc. <http://rockstor.com>
 * This file is part of RockStor.
 * 
 * RockStor is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published
 * by the Free Software Foundation; either version 2 of the License,
 * or (at your option) any later version.
 * 
 * RockStor is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 * 
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 * 
 */

ImagesView = RockstorLayoutView.extend({
  

  initialize: function() {
    this.constructor.__super__.initialize.apply(this, arguments);
    this.template = window.JST.rockons_images;
    this.collection = new ImageCollection();
    this.dependencies.push(this.collection);
    this.collection.on("reset", this.renderImages, this);
   
  },

  render: function() {
    this.collection.fetch();
    return this;
  },

  renderImages: function() {
	    var _this = this;
	    $(this.el).empty();
	    $(this.el).append(this.template({collection: this.collection}));
	  
	    this.dockerServiceView = new DockerServiceView({
		      parentView: this,
		      dockerService: this.dockerService
		    });
		    
		$('#docker-service-ph').append(this.dockerServiceView.render().el);
  },

  
});

