// 重写ext组件

Ext.BLANK_IMAGE_URL = '/images/public/s.gif"';

/**
 * 允许直接修改label显示值
 */
Ext.override(Ext.form.Label, {
			setText : function(t) {
				this.text = t;
				if (this.rendered) {
					this.el.update(t);
				}
			},
			setValue : function(t) {
				this.text = t;
				if (this.rendered) {
					this.el.update(t);
				}
			}
		});

/**
 * 重写 Ext.util.Format.usMoney
 * 
 * @param {}
 *            v
 * @param {}
 *            meta
 * @param {}
 *            record
 * @return {String}
 */
Ext.util.Format.usMoney = function(v, meta, record) { // override
	// Ext.util.usMoney
	if (v==='') {
		v=0;
	}
	if(isNaN(v)){
		v = Ext.num(Number(v), 0); // ensure v is a valid numeric value, otherwise
	}
	// use 0 as
	// a base (fixes $NaN.00 appearing in summaryRow when no
	// records exist)
	
	v = String(v);
	var ps = v.split('.');
	var whole = ps[0];
	var sub = ps[1] ? '.' + ps[1] : '.00';
	var r = /(\d+)(\d{3})/;

	while (r.test(whole)) {
		whole = whole.replace(r, '$1' + ',' + '$2');
	}
	v = whole + sub;
	if (v.charAt(0) == '-') {
		return '-' + v.substr(1);
	}

	return '' + v;

}
Ext.util.Format.cnMoney = function(v, meta, record) { // override
	// Ext.util.usMoney
	v = Ext.num(Number(v), 0); // ensure v is a valid numeric value, otherwise
	// use 0 as
	// a base (fixes $NaN.00 appearing in summaryRow when no
	// records exist)
	v = (Math.round((v - 0) * 100)) / 100;
	v = (v == Math.floor(v)) ? v + ".00" : ((v * 10 == Math.floor(v * 10)) ? v
			+ "0" : v);
	v = String(v);
	var ps = v.split('.');
	var whole = ps[0];
	var sub = ps[1] ? '.' + ps[1] : '.00';
	var r = /(\d+)(\d{3})/;

	while (r.test(whole)) {
		whole = whole.replace(r, '$1' + ',' + '$2');
	}
	v = whole + sub;
	if (v.charAt(0) == '-') {
		return '-' + v.substr(1);
	}

	return '' + v;

}
//渲染查询界面的金额数据格式
Ext.util.Format.SearchMoney = function(v, meta, record) { // override
	// Ext.util.usMoney
	if(isNaN(v)){
		v = 0; // ensure v is a valid numeric value, otherwise
	}
	if(v==0){
		return '';// ensure v is a valid numeric value, otherwise
	}
	// use 0 as
	// a base (fixes $NaN.00 appearing in summaryRow when no
	// records exist)
//	v = (Math.round((v - 0) * 100)) / 100;
//	v = (v == Math.floor(v)) ? v + ".00" : ((v * 10 == Math.floor(v * 10)) ? v
//			+ "0" : v);
	v = String(v);
	var ps = v.split('.');
	var whole = ps[0];
	var sub = ps[1] ? '.' + ps[1] : '.00';
	var r = /(\d+)(\d{3})/;

	while (r.test(whole)) {
		whole = whole.replace(r, '$1' + ',' + '$2');
	}
	v = whole + sub;
	if (v.charAt(0) == '-') {
		return '-' + v.substr(1);
	}

	return '' + v;

}
/**
 * 限制textfield输入长度 属性设置 "lockLength" true/false
 * 
 * 设置空格也作为未填验证处理
 * 
 * @type Number
 */
Ext.override(Ext.form.Field, {
			size : 20,
			initValue : function() {
				if (this.value !== undefined) {
					this.setValue(this.value);
				} else if (this.el.dom.value.length > 0) {
					this.setValue(this.el.dom.value);
				}
				this.el.dom.size = this.size;

				if (this.lockLength === true) {
					if (!isNaN(this.maxLength) && (this.maxLength * 1) > 0
							&& (this.maxLength != Number.MAX_VALUE)) {
						this.el.dom.maxLength = this.maxLength;
					}
				}

			},
			validator : function(text) {
				if (this.allowBlank == false
						&& Ext.util.Format.trim(text).length == 0)
					return false;
				else
					return true;
			},
			setFieldLabel: function(text){
//			    var r = this.getEl().up('div.x-form-item');
//			    r.dom.firstChild.firstChild.nodeValue = String.format('{0}', text);
				if (this.rendered) {
			      this.el.up('.x-form-item', 10, true).child('.x-form-item-label').update(text);
			    }
			    this.fieldLabel = text;

		   }
		});
		
/**
 * 限制textArea输入长度 属性设置 "lockLength" true/false
 * 
 * 设置空格也作为未填验证处理
 * 
 * @type TextArea
 */
Ext.override(Ext.form.TextArea, {
			size : 20,
			lockLength:true,
			initValue : function() {
				if (this.value !== undefined) {
					this.setValue(this.value);
				} else if (this.el.dom.value.length > 0) {
					this.setValue(this.el.dom.value);
				}
				this.el.dom.size = this.size;

				if (this.lockLength === true) {
					if (!isNaN(this.maxLength) && (this.maxLength * 1) > 0
							&& (this.maxLength != Number.MAX_VALUE)) {
						this.el.dom.maxLength = this.maxLength;
					}
				}

			},
			validator : function(text) {
				if (this.allowBlank == false
						&& Ext.util.Format.trim(text).length == 0)
					return false;
				else
					return true;
			},
			setFieldLabel: function(text){
//			    var r = this.getEl().up('div.x-form-item');
//			    r.dom.firstChild.firstChild.nodeValue = String.format('{0}', text);
				if (this.rendered) {
			      this.el.up('.x-form-item', 10, true).child('.x-form-item-label').update(text);
			    }
			    this.fieldLabel = text;

		   },
		    // private
    onRender : function(ct, position){
        if(!this.el){
            this.defaultAutoCreate = {
                tag: "textarea",
                style:"width:100px;height:60px;",
                autocomplete: "off"
            };
        }
        Ext.form.TextArea.superclass.onRender.call(this, ct, position);
        if(this.grow){
            this.textSizeEl = Ext.DomHelper.append(document.body, {
                tag: "pre", cls: "x-form-grow-sizer"
            });
            if(this.preventScrollbars){
                this.el.setStyle("overflow", "hidden");
            }
            this.el.setHeight(this.growMin);
        }
        this.initValue();
    }
		});

/**
 * 给treeloader加上jsonData, 以post方式提交参数
 */
Ext.override(Ext.tree.TreeLoader, {

			requestData : function(node, callback) {
				if (this.fireEvent("beforeload", this, node, callback) !== false) {
					this.transId = Ext.Ajax.request({
								method : this.requestMethod,
								url : this.dataUrl || this.url,
								success : this.handleResponse,
								failure : this.handleFailure,
								scope : this,
								jsonData : this.jsonData,
								argument : {
									callback : callback,
									node : node
								},
								params : this.getParams(node)
							});
				} else {
					// if the load is cancelled, make sure we notify
					// the node that we are done
					if (typeof callback == "function") {
						callback();
					}
				}
			}

		});
/**
 * 为combox添加keyup事件
 */
//Ext.override(Ext.form.ComboBox, {
//    onKeyUp: function(e) {
//        var k = e.getKey();
//    
//        if (this.editable !== false && (k == e.BACKSPACE || !e.isSpecialKey())) {
//            this.lastKey = k;
//            this.dqTask.delay(this.queryDelay);
//        }
//
//        // *** 2.x/3.x bugfix for non-functional "keyup" event
//        // *** by @condor -- http://www.extjs.com/forum/showthread.php?p=217782
//        Ext.form.ComboBox.superclass.onKeyUp.call(this, e);
//    },
//
//    initEvents : function(){
//        Ext.form.ComboBox.superclass.initEvents.call(this);
//        this.keyNav = new Ext.KeyNav(this.el, {
//            "up" : function(e){
//                this.inKeyMode = true;
//                this.selectPrev();
//            },
//            "down" : function(e){
//                if(!this.isExpanded()){
//                    this.onTriggerClick();
//                }else{
//                    this.inKeyMode = true;
//                    this.selectNext();
//                }
//            },
//            "enter" : function(e){
//                this.onViewClick();
//                this.delayedCheck = true;
//                this.unsetDelayCheck.defer(10, this);
//            },
//            "esc" : function(e){
//                this.collapse();
//            },
//            "tab" : function(e){
//                this.onViewClick(false);
//                return true;
//            },
//            scope : this,
//            doRelay : function(foo, bar, hname){
//                if(hname == 'down' || this.scope.isExpanded()){
//                   return Ext.KeyNav.prototype.doRelay.apply(this, arguments);
//                }
//                return true;
//            },
//            forceKeyDown : true
//        });
//        this.queryDelay = Math.max(this.queryDelay || 10,
//                this.mode == 'local' ? 10 : 250);
//        this.dqTask = new Ext.util.DelayedTask(this.initQuery, this);
//        if(this.typeAhead){
//            this.taTask = new Ext.util.DelayedTask(this.onTypeAhead, this);
//        }
//
//        // *** 2.x/3.x bugfix for non-functional "keyup" event
//        // *** by @condor -- http://www.extjs.com/forum/showthread.php?p=217782
//        if((this.editable !== false) && !this.enableKeyEvents) {
//            this.el.on("keyup", this.onKeyUp, this);
//        }
//    }
//});
// 解决grid鼠标移到别处报错
Ext.override(Ext.Element, {
    findParent : function(simpleSelector, maxDepth, returnEl){
        var p = this.dom, b = document.body, depth = 0, dq = Ext.DomQuery, stopEl;
        maxDepth = maxDepth || 50;
        if(typeof maxDepth != "number"){
            stopEl = Ext.getDom(maxDepth);
            maxDepth = 10;
        }
        try {
            while(p && p.nodeType == 1 && depth < maxDepth && p != b && p != stopEl){
                if(dq.is(p, simpleSelector)){
                    return returnEl ? Ext.get(p) : p;
                }
                depth++;
                p = p.parentNode;
            }
        } catch(e) {};
        return null;
    }
});
// 将会导致余额初始化界面,view 渲染后数据消失(切忌使用)
//Ext.override(Ext.grid.GridView, {
//    renderUI : function(){
//        var header = this.renderHeaders();
//        var body = this.templates.body.apply({rows:''});
//        var html = this.templates.master.apply({
//            body: body,
//            header: header
//        });
//        var g = this.grid;
//        g.getGridEl().dom.innerHTML = html;
//        this.initElements();
//        Ext.fly(this.innerHd).on("click", this.handleHdDown, this);
//        this.mainHd.on("mouseover", this.handleHdOver, this);
//        this.mainHd.on("mouseout", this.handleHdOut, this);
//        this.mainHd.on("mousemove", this.handleHdMove, this);
//        this.scroller.on('scroll', this.syncScroll,  this);
//        if(g.enableColumnResize !== false){
//            this.splitone = new Ext.grid.GridView.SplitDragZone(g, this.mainHd.dom);
//        }
//        if(g.enableColumnMove){
//            this.columnDrag = new Ext.grid.GridView.ColumnDragZone(g, this.innerHd);
//            this.columnDrop = new Ext.grid.HeaderDropZone(g, this.mainHd.dom);
//        }
//        if(g.enableHdMenu !== false){
//            if(g.enableColumnHide !== false){
//                this.colMenu = new Ext.menu.Menu({id:g.id + "-hcols-menu"});
//                this.colMenu.on("beforeshow", this.beforeColMenuShow, this);
//                this.colMenu.on("itemclick", this.handleHdMenuClick, this);
//            }
//            this.hmenu = new Ext.menu.Menu({id: g.id + "-hctx"});
//            this.hmenu.add(
//                {id:"asc", text: this.sortAscText, cls: "xg-hmenu-sort-asc"},
//                {id:"desc", text: this.sortDescText, cls: "xg-hmenu-sort-desc"}
//            );
//            if(g.enableColumnHide !== false){
//                this.hmenu.add('-',
//                    {id:"columns", text: this.columnsText, menu: this.colMenu, iconCls: 'x-cols-icon'}
//                );
//            }
//            this.hmenu.on("itemclick", this.handleHdMenuClick, this);
//        }
//        if(g.enableDragDrop || g.enableDrag){
//            this.dragZone = new Ext.grid.GridDragZone(g, {
//                ddGroup : g.ddGroup || 'GridDD'
//            });
//        }
//        this.updateHeaderSortState();
//        if(this.grid.trackMouseOver){
//            this.mainBody.on("mouseover", this.onRowOver, this);
//            this.mainBody.on("mouseout", this.onRowOut, this);
//        }
//    }
//});
// toolbar折行
Ext.layout.FloatLayout = Ext.extend(Ext.layout.ContainerLayout, {
    setContainer: function(ct) {
        var ce = ct.getLayoutTarget();
        this.padding = this.parseMargins(this.padding||'0');
        this.padding.top += ce.getPadding('t');
        this.padding.left += ce.getPadding('l');
        Ext.layout.FloatLayout.superclass.setContainer.apply(this, arguments);
        ct.addClass('ux-float-layout-ct');
    },

    renderAll: function(ct) {
        var ce = this.container.getLayoutTarget(), nh;
        this.cw = ce.getWidth(true) + ce.getPadding('r');
        this.top = this.padding.top;
        this.left = this.padding.left;
        this.contentHeight = 0;
        this.rowHeight = 0;
        Ext.layout.FloatLayout.superclass.renderAll.apply(this, arguments);
        this.contentHeight += this.rowHeight;
        if ((nh = this.contentHeight + this.padding.top + this.padding.bottom + ce.getPadding('tb')) != ct.getHeight()) {
            ct.setHeight(nh);
            ct.ownerCt && ct.ownerCt.doLayout();
        }
    },

    renderItem : function(c, position, target){
        var r = c.rendered,
            e, p, pe, w, nextLeft;
        delete c.removeMode;
        Ext.layout.FloatLayout.superclass.renderItem.apply(this, arguments);
        e = c.getPositionEl();
        if (!r) {
            e.setStyle('position', 'absolute');
        }
        w = e.getWidth();

//      Wrap to the next line if necessary
        if (this.left + w > this.cw) {
            this.left = this.padding.left;
            this.top += this.rowHeight;
            this.contentHeight += this.rowHeight;
            this.rowHeight = 0;
        }
        e.setStyle({
            top: this.top + 'px',
            left: this.left + 'px'
        });
        this.rowHeight = Math.max(this.rowHeight, e.getHeight() + e.getMargins('tb'));

//      Move onwards
        this.left = this.left + w;
    },

    isValidParent: function() {
        return false;
    }
});
Ext.Container.LAYOUTS['float'] = Ext.layout.FloatLayout;

Ext.override(Ext.data.Connection, {
	handleResponse : function(response){
        this.transId = false;
        var options = response.argument.options;
        response.argument = options ? options.argument : null;
        if(response.responseText.indexOf('login.jsp') != -1){
			Ext.Msg.alert('提示','登录过期请重新登录');
			this.fireEvent("requestcomplete", this, response, options);
			return;
		};
        if(response.responseText.indexOf('message')!=-1&&
        	response.responseText.indexOf('success')!=-1&&
        	response.responseText.indexOf('result')!=-1
        ){
        	var message=Ext.decode(response.responseText);
        	if(message.message.success===false&&message.message.message=='您没有该操作的权限，操作被拒绝。'){
        		Ext.Msg.alert('提示',message.message.message);
        		util.hideCurrentPage();
	        	this.fireEvent("requestcomplete", this, response, options);
	        	return;
        	};
        };
        this.fireEvent("requestcomplete", this, response, options);
        Ext.callback(options.success, options.scope, [response, options]);
        Ext.callback(options.callback, options.scope, [options, true, response]);
    }
});
// 按钮点击后禁用,200毫秒启用
Ext.override(Ext.Button, {
	listeners:{
		'click':function(){
			this.disable();
			(function(){
				this.enable();
			}).defer(400,this);
		}
	}
});
// 获取TabPanel打开panel个数
Ext.override(Ext.TabPanel, {
	getOpenPages:function(){
			var openPages=0;
			for(var i=0;i<this.items.length;i++){
				var item=this.items.get(i);
		        var el = this.getTabEl(item);
		        if(el.style.display != 'none'){
		        	openPages++;
		        };
			};
			return openPages;
		}
});
Ext.TabPanel.AccessStack = function(){
    var items = [];
    return {
        add : function(item){
            items.push(item);
            if(items.length > 15){
                items.shift();
            }
        },

        remove : function(item){
            var s = [];
            for(var i = 0, len = items.length; i < len; i++) {
                if(items[i] != item){
                    s.push(items[i]);
                }
            }
            items = s;
        },

        next : function(){
            return items.pop();
        },
        
        getItems:function(){
			return items;
		}
    };
};
// 解决ie下浏览器缩放导致border界面布局不正确
Ext.override(Ext.layout.BorderLayout, {
	onLayout : function(ct, target){
        var collapsed;
        if(!this.rendered){
            target.position();
            target.addClass('x-border-layout-ct');
            var items = ct.items.items;
            collapsed = [];
            for(var i = 0, len = items.length; i < len; i++) {
                var c = items[i];
                var pos = c.region;
                if(c.collapsed){
                    collapsed.push(c);
                }
                c.collapsed = false;
                if(!c.rendered){
                    c.cls = c.cls ? c.cls +' x-border-panel' : 'x-border-panel';
                    c.render(target, i);
                }
                this[pos] = pos != 'center' && c.split ?
                    new Ext.layout.BorderLayout.SplitRegion(this, c.initialConfig, pos) :
                    new Ext.layout.BorderLayout.Region(this, c.initialConfig, pos);
                this[pos].render(target, c);
            }
            this.rendered = true;
        }

        var size = target.getViewSize();
        if(size.width < 20 || target.getWidth()==0 || size.height < 20 || target.getWidth()==0){ // display none?
            if(collapsed){
                this.restoreCollapsed = collapsed;
            }
            return;
        }else if(this.restoreCollapsed){
            collapsed = this.restoreCollapsed;
            delete this.restoreCollapsed;
        }

        var w = size.width, h = size.height;
        var centerW = w, centerH = h, centerY = 0, centerX = 0;

        var n = this.north, s = this.south, west = this.west, e = this.east, c = this.center;
        if(!c){
            throw 'No center region defined in BorderLayout ' + ct.id;
        }

        if(n && n.isVisible()){
            var b = n.getSize();
            var m = n.getMargins();
            b.width = w - (m.left+m.right);
            b.x = m.left;
            b.y = m.top;
            centerY = b.height + b.y + m.bottom;
            centerH -= centerY;
            n.applyLayout(b);
        }
        if(s && s.isVisible()){
            var b = s.getSize();
            var m = s.getMargins();
            b.width = w - (m.left+m.right);
            b.x = m.left;
            var totalHeight = (b.height + m.top + m.bottom);
            b.y = h - totalHeight + m.top;
            centerH -= totalHeight;
            s.applyLayout(b);
        }
        if(west && west.isVisible()){
            var b = west.getSize();
            var m = west.getMargins();
            b.height = centerH - (m.top+m.bottom);
            b.x = m.left;
            b.y = centerY + m.top;
            var totalWidth = (b.width + m.left + m.right);
            centerX += totalWidth;
            centerW -= totalWidth;
            west.applyLayout(b);
        }
        if(e && e.isVisible()){
            var b = e.getSize();
            var m = e.getMargins();
            b.height = centerH - (m.top+m.bottom);
            var totalWidth = (b.width + m.left + m.right);
            b.x = w - totalWidth + m.left;
            b.y = centerY + m.top;
            centerW -= totalWidth;
            e.applyLayout(b);
        }

        var m = c.getMargins();
        var centerBox = {
            x: centerX + m.left,
            y: centerY + m.top,
            width: centerW - (m.left+m.right),
            height: centerH - (m.top+m.bottom)
        };
        c.applyLayout(centerBox);

        if(collapsed){
            for(var i = 0, len = collapsed.length; i < len; i++){
                collapsed[i].collapse(false);
            }
        }

        if(Ext.isIE && Ext.isStrict){ // workaround IE strict repainting issue
            target.repaint();
        }
    }
});
// 重写extpagingToolBar的方法onLoad,因为所有按钮按下后将延时400毫秒
Ext.override(Ext.PagingToolbar, {
	//加入换页函数
	changePage: function(page){
        this.doLoad(this.cursor+this.pageSize);
    },
	// private
    onLoad : function(store, r, o){
        if(!this.rendered){
            this.dsLoaded = [store, r, o];
            return;
        }
       this.cursor = o.params ? o.params[this.paramNames.start] : 0;
       var d = this.getPageData(), ap = d.activePage, ps = d.pages;

       this.afterTextEl.el.innerHTML = String.format(this.afterPageText, d.pages);
       this.field.dom.value = ap;
        (function(){
       		this.first.setDisabled(ap == 1);
		    this.prev.setDisabled(ap == 1);
		    this.next.setDisabled(ap == ps);
		    this.last.setDisabled(ap == ps);
		    this.loading.enable();
		    this.updateInfo();
       }).defer(410,this)
    }
});