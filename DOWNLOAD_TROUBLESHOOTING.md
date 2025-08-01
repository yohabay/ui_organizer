# Download Troubleshooting Guide

If you're having trouble downloading your portfolio, follow these steps to diagnose and fix the issue.

## Quick Fixes

### 1. Test Download Function

- Click the "Test Download Function" button in the Export tab
- This creates a simple test image to verify basic download functionality
- If this works, the issue is with your portfolio export, not the browser

### 2. Check Browser Support

The app shows browser compatibility status:

- ✅ **Download Attribute**: Your browser supports the download attribute
- ✅ **Blob API**: Your browser supports Blob creation
- ✅ **URL.createObjectURL**: Your browser supports URL object creation

If any show ❌, try a different browser.

## Common Issues & Solutions

### Browser Popup Blocker

**Problem**: Downloads are blocked by popup blocker
**Solution**:

- Allow popups for this site
- Try right-clicking download links and selecting "Save As"
- Check browser settings for popup permissions

### Download Folder Permissions

**Problem**: System won't allow downloads to default folder
**Solution**:

- Check your browser's download settings
- Verify folder permissions on your system
- Try changing the default download location

### File Size Too Large

**Problem**: Large images fail to download
**Solution**:

- Try exporting in JPG format instead of PNG
- Reduce the number of screenshots
- Use a smaller template layout

### Browser Compatibility

**Problem**: Older browser doesn't support automatic downloads
**Solution**:

- Use a modern browser (Chrome, Firefox, Safari, Edge)
- Update your browser to the latest version
- Try the "Download Link" fallback method

## Step-by-Step Troubleshooting

### Step 1: Verify Browser Support

1. Open the Export tab
2. Check the "Browser Support Status" section
3. All three indicators should show ✅
4. If any show ❌, try a different browser

### Step 2: Test Basic Download

1. Click "Test Download Function"
2. Check if a test file downloads
3. If successful, proceed to Step 3
4. If failed, try a different browser

### Step 3: Check Export Settings

1. Ensure you have screenshots uploaded
2. Select a template
3. Try different export formats (PNG, JPG, PDF)
4. Use smaller file sizes if needed

### Step 4: Use Fallback Methods

If automatic download fails:

1. Look for the "Download Link" that appears on the page
2. Click the link to download manually
3. Right-click and "Save As" if needed

## Browser-Specific Solutions

### Chrome

- Go to Settings > Advanced > Downloads
- Ensure "Ask where to save each file before downloading" is disabled
- Check that the download folder is accessible

### Firefox

- Go to Options > General > Downloads
- Set download behavior to "Save files"
- Check that the download folder is accessible

### Safari

- Go to Preferences > General
- Set "File download location" to a folder you can access
- Ensure "Open 'safe' files after downloading" is unchecked

### Edge

- Go to Settings > Downloads
- Ensure "Ask me what to do with each download" is disabled
- Check that the download folder is accessible

## Advanced Troubleshooting

### Check Console for Errors

1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Try to export and look for error messages
4. Common errors:
   - "Blob creation failed": Browser doesn't support Blob API
   - "Download blocked": Popup blocker is active
   - "Canvas error": Image processing failed

### Clear Browser Cache

1. Clear browser cache and cookies
2. Refresh the page
3. Try the export again

### Try Different Export Formats

- **PNG**: Best quality, larger file size
- **JPG**: Smaller file size, good quality
- **PDF**: Document format, may work better in some browsers

## Still Having Issues?

If none of the above solutions work:

1. **Try a different browser** - Chrome, Firefox, Safari, or Edge
2. **Check your antivirus software** - Some antivirus programs block downloads
3. **Try on a different device** - Mobile browsers may have different limitations
4. **Contact support** - Include your browser version and any error messages

## Technical Details

The download process uses these methods in order:

1. **Blob Method**: Creates a Blob and triggers download
2. **Data URL Method**: Uses data URL as fallback
3. **Visible Link Method**: Creates a clickable download link on the page

If all methods fail, the app will show an error message with specific details about what went wrong.
