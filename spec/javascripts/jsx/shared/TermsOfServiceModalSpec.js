/*
 * Copyright (C) 2015 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import $ from 'jquery'
import {mount} from 'enzyme'
import TermsOfServiceModal from 'ui/features/terms_of_service_modal/react/TermsOfServiceModal'

QUnit.module('Terms of Service Modal Link', {
  beforeEach() {
    $('#fixtures').html('<div id="main">')
  },
  afterEach() {
    $('#fixtures').empty()
  }
})

test('renders correct link when preview is provided', () => {
  ENV.TERMS_OF_SERVICE_CUSTOM_CONTENT = 'Hello World'
  const wrapper = mount(<TermsOfServiceModal preview />)
  const renderedLink = wrapper.find('button')
  equal(renderedLink.text(), 'Preview')
})

test('renders correct link when preview is not provided', () => {
  ENV.TERMS_OF_SERVICE_CUSTOM_CONTENT = 'Hello World'
  const wrapper = mount(<TermsOfServiceModal />)
  const renderedLink = wrapper.find('button')
  equal(renderedLink.text(), 'Acceptable Use Policy')
})
